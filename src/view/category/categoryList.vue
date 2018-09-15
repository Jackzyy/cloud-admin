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
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">详情</el-button>
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
                tableData: [],
                category:{
                    params:{
                        pn:998,
                        size:998
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