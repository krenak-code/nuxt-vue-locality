import {
  addLocality,
  bootstrapVueContext,
  compositeConfiguration,
  customWrapper
} from '~/test/fixture/utils'
import Mounted from '~/test/fixture/pages/mounted'

describe('plugin is defined', () => {
  let vueCtx = null

  beforeEach(() => {
    vueCtx = bootstrapVueContext(compositeConfiguration(addLocality))
  })

  afterEach(() => {
    vueCtx.teardownVueContext()
  })

  test('init', () => {
    const wrapper = customWrapper(Mounted, vueCtx)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$locality).toBeTruthy()
    expect(wrapper.vm.$locality.ufs).toBeTruthy()
    expect(wrapper.vm.$locality.cities).toBeTruthy()
  })
})
