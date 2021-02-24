<template>
  <div id="micro-fe">
    First MF
  </div>
</template>

<script>
import scriptLoader from '../services/scriptLoader'
import MF_LINKS from '../const'

export default {
  name: "FirstMF",
  mounted() {
    scriptLoader.addScript(MF_LINKS.FIRST_MF, 'micro_fe')
  },
  destroyed() {
    scriptLoader.removeScript('micro_fe')
  }
}
</script>
