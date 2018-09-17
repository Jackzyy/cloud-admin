<template>
    <div class="category-info">
        <h3></h3>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="分类头图"
              width="180">
              <template slot-scope="scope">
                  <div class="img">
                      <img :src="scope.row.img" alt="pic">
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="作者"
              width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>

            <el-table-column
              label="创建日期"
              width="250">
              <template slot-scope="scope">
                  <span>{{ scope.row.createTime }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="序列"
              width="180">
              <template slot-scope="scope">
                  <span>{{ scope.row.index }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleCreate(scope.$index, scope.row)">生成轮播图</el-button>
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
                tableData:[],
                category:{
                    params:{
                        pn:998,
                        size:998
                    }
                },
                categoryId: ''
            }
        },
        created(){
            console.log(this.$route.query.id);
            this.categoryId = this.$route.query.id;
            this.$axios.get('/category/'+this.categoryId+'/books',this.category).then(res => {
                console.log(res);
                this.tableData = res.data.books
            })
        }
    }
</script>

<style scoped lang="scss">
    .category-info{
        margin-left: 210px;
    }
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
</style>