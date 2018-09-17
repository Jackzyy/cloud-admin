<template>
    <div class="user-list">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="用户头像"
              width="120">
              <template slot-scope="scope">
                  <div class="img">
                      <img :src="scope.row.avatar" alt="pic">
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="用户名"
              width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.username }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="昵称"
              width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.nickname }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="个性签名"
              width="300">
              <template slot-scope="scope">
                  <span>{{ scope.row.desc }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="创建时间"
              width="250">
              <template slot-scope="scope">
                  <span>{{ scope.row.updatedTime }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row._id)">删除该用户</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
            class="pag">
        </el-pagination>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            getUser() {
                this.$axios.get('/user').then(res => {
                    console.log(res);
                    this.tableData = res.data
                })
            },
            handleDelete(id){
                console.log(id);
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => { 
                    this.$axios.post('/user/delete',{userIds:id}).then(res => {
                        console.log(res);
                        this.getUser()
                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                      type: 'info',
                      message: '已取消删除'
                    });          
                });
            }
        },
        created(){
            this.getUser()
        }
    }
</script>

<style scoped lang="scss">
    .user-list{
        margin-left: 210px;
        position: relative;
        .img{
            width:50px;
            height:50px;
            border-radius: 50px;
            overflow: hidden;
            img{
                width:50px;
                height:50px;
            }
        }
        .pag{
            position: absolute;
            right: 100px;
            bottom:-80px;
        }   
    }
</style>