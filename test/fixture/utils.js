export const compositeConfiguration = (...configs) => {
  return context => configs.forEach(config => config(context))
}

export const bootstrapVueContext = (configureContext) => {
  const context = {}
  const teardownVueContext = () => {
    jest.unmock('vue')
    Object.keys(context).forEach(key => delete context[key])
    jest.resetModules()
  }

  jest.isolateModules(() => {
    context.vueTestUtils = require('@vue/test-utils')
    context.vueTestUtils.config.stubs.nuxt = { template: '<div />' }
    context.vueTestUtils.config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
    context.vueTestUtils.config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
    context.vue = context.vueTestUtils.createLocalVue()

    jest.doMock('vue', () => context.vue)

    configureContext && configureContext(context)
  })

  return {
    teardownVueContext,
    ...context
  }
}

export const customWrapper = (component, context) => {
  return context.vueTestUtils.shallowMount(component, {
    localVue: context.vue,
  })
}

export const addLocality = (context) => {
  context.locality = require('../../lib/plugin')
  context.vue.use(context.locality)
}
