<template>
    <el-row>
        <el-col>
            <el-card shadow="hover">
                <img src="@/assets/images/line.jpg" class="image">
                <div class="card-content">
                    <span>{{ data.name }}</span>
                    <div class="card-content-left clearfix">
                        <span>{{ data.englishName }}</span>
                        <div class="time">
                            创建:<span>{{ data.serviceDate | moment }}</span>
                            更新:<span>{{ data.modifyTime | moment }}</span>
                        </div>
                    </div>
                    <div class="card-button">
                        <el-button title="编辑线路" type="primary" icon="el-icon-edit-outline" circle></el-button>
                        <el-button title="删除线路" type="danger" icon="el-icon-delete" circle></el-button>
                        <el-button title="查看线路" type="success" icon="el-icon-arrow-right" circle></el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
      };
    }
  }
</script>

<style scoped>
    .image {
        width: 100px;
        height: 70px;
        float: left;
        margin: 0 20px 0 0;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .card-content {
        text-align: left !important;
    }

    .card-button {
        float: right;
        margin-top: -88px;
    }
    .el-button {
        display: -webkit-box;
    }

    .el-button+.el-button {
        margin-left: 0;
    }

    .card-content-left {
        width: 80%;
     }

    .el-button.is-circle {
        padding: 6px;
        margin: 5px;
    }

    .time {
        margin: 20px 0 0 0;
    }

    .time span {
        margin-right: 20px;
        margin-left: 10px;
    }
</style>

