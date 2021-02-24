<template>
  <div>
    Response : {{ res }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: ''
    }
  },
  async mounted () {
    this.res = await this.$locality.ufs()
  }
}
</script>
