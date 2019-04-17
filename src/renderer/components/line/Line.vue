<template>
    <div>
        <Dialog ref="dialog"></Dialog>
        <el-button type="primary" @click="_getLineList">刷新</el-button>
        <el-button type="success" @click="_addLine">添加</el-button>
        <line-card :list="list"></line-card>
    </div>
</template>

<script type="text/ecmascript-6">
  import LineCard from '@/components/line/LineCard'
  import Dialog from '@/base/dialog/Dialog'
  import { getLineList } from '../../api/home'

  export default {
    data () {
      return {
        list: []
      };
    },
    mounted () {
      this._getLineList()
    },
    methods: {
      _getLineList () {
        getLineList((data) => {
          this.list = data
        })
      },
      _addLine () {
        this.$refs.dialog.showDialog()
      }
    },
    components: { LineCard, Dialog }
  }
</script>

<style>
</style>
