<template>
    <div class="book-list">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="书籍头图"
              width="120"
              align="center">
              <template slot-scope="scope">
                  <div class="img">
                      <img :src="scope.row.img" style="width:50px" alt="pic">
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="书名"
              width="350"
              align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="书籍排序"
              width="180"
              align="center">
              <template slot-scope="scope">
                  <span>{{ scope.row.index }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="作者"
              width="180"
              align="center">
              <template slot-scope="scope">
                  <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除该书</el-button>
              </template>
            </el-table-column>
        </el-table>
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
            getBook() {
                this.$axios.get('/book').then(res => {
                    console.log(res);
                    this.tableData = res.data
                })
            },
            handleEdit(book){
                this.$router.push('/home/bookEdit/?id='+book._id)
            }
        },
        created(){
            this.getBook()
        }
    }
</script>

<style scoped lang="scss">
    .book-list{
        margin-left: 210px;
    }
    .img{
        width:50px;
        height:50px;
        border-radius: 50px;
        overflow: hidden;
        margin: 0 auto;
        img{
            width:50px;
            height:50px;
        }
    }
</style>