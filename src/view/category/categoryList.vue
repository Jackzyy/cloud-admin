<template>
    <div class="category-list">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="书籍头图"
              width="100">
              <template slot-scope="scope">
                  <div class="img">
                      <img :src="scope.row.icon" alt="pic">
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="类名"
              width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="书籍序列"
              width="150">
              <template slot-scope="scope">
                  <span>{{ scope.row.index }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="BOOK_ID"
              width="250">
              <template slot-scope="scope">
                  <span>{{ scope.row._id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="数量"
              width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.books.length }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                    size="mini"
                    @click="handleInfo(scope.row)">详情</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row)">删除该分类</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                category:{
                    params:{
                        pn:998,
                        size:998
                    }
                },
                categoryId:{
                    params:{
                        id:''
                    }
                }
            }
        },
        methods: {
            getcategoryList() {
                this.$axios.get('/category',this.category).then(res => {
                    console.log(res);
                    this.tableData = res.data
                })
            },
            handleEdit(info){
                console.log(info._id);
                this.$router.push('/home/categoryEdit?id='+info._id)
            },
            handleInfo(info){
                this.$router.push('/home/categoryInfo?id='+info._id)
            },
            handleDelete(info){
                this.categoryId.id = info._id
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete('/category/'+info._id,this.categoryId).then(res => {
                        console.log(res);
                        this. getcategoryList()
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
            this.getcategoryList()
        }
    }
</script>

<style scoped lang="scss">
    .category-list{
        margin-left: 210px;
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
    }
</style>