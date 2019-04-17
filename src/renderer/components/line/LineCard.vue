<template>
    <div>
        <card v-for="item in list" :data="item"></card>
    </div>
</template>

<script type="text/ecmascript-6">
  import Card from '@/base/card/Card'

  export default {
    props: ['list'],
    components: { Card }
  }
</script>

<style>
    .el-row {
        margin-top: 20px;
    }
</style>
