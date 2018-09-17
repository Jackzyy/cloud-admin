<template>
    <div class="side-show">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="头图"
                width="120">
                <template slot-scope="scope">
                    <div class="img">
                        <img :src="scope.row.img" alt="pic">
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="类名"
                width="250">
                <template slot-scope="scope">
                    <span> {{scope.row._id}} </span>
              </template>
            </el-table-column>
            <el-table-column
                label="顺序"
                width="120">
                <template slot-scope="scope">
                    <span> {{scope.row.index}} </span>
              </template>
            </el-table-column>
            <el-table-column
                label="标题"
                width="230">
                <template slot-scope="scope">
                    <span> {{scope.row.title}} </span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
                swiper: {
                    params:{
                        pn:998,
                        size:998
                    }
                }
            }
        },
        methods: {
            getSwiper() {
                this.$axios.get('/swiper',this.swiper).then(res => {
                    console.log(res);
                    this.tableData = res.data
                })
            }
        },
        created(){
            this.getSwiper()
        }
    }
</script>

<style scoped lang="scss">
    .side-show{
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