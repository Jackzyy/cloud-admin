<template>
    <div class="book-list">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="书名"
              width="350">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="书籍头图"
              width="180">
              <template slot-scope="scope">
                  <img :src="scope.row.img" style="width:50px" alt="pic">
              </template>
            </el-table-column>
            <el-table-column
              label="书籍排序"
              width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.index }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="作者"
              width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
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
</style>