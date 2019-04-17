<template>
    <el-dialog title="创建线路" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="线路名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="线路内容" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>

            <el-form-item>
                <date-picker title="创建时间"></date-picker>
            </el-form-item>
            <el-form-item>
                <date-picker title="更新时间"></date-picker>
            </el-form-item>

            <el-form-item label="线路区域" :label-width="formLabelWidth">
                <el-select v-model="form.area" placeholder="请选择线路区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
  import DatePicker from '@/base/datePicker/DatePicker'

  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          content: '',
          region: '',
          date1: '',
          date2: '',
          area: ''
        },
        formLabelWidth: '120px',
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      };
    },
    methods: {
      showDialog () {
        this.dialogFormVisible = true
      }
    },
    components: { DatePicker }
  };
</script>