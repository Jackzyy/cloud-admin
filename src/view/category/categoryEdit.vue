<template>
    <div class="category-edit">
        <el-form ref="form" :model="form" label-width="100px" class="form-left">
            <el-form-item label="类别名称">
                <el-input type="text" :value="bookInfo.title"></el-input>
            </el-form-item>
            <el-form-item label="类别图标">
                <img :src="bookInfo.icon" alt="pic" class="img">
            </el-form-item>
            <el-form-item label="优先级">
                <el-input type="text" :value="bookInfo.index"></el-input>
            </el-form-item>
        </el-form>

        <div class="side">
            <span>修改为=></span>
        </div>

        <el-form ref="form" :model="form" label-width="100px" class="form-right">
            <el-form-item label="类别名称">
                <el-input type="text" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="类别图标">
                <imgUpload v-model="form.icon"></imgUpload>
            </el-form-item>
            <el-form-item label="优先级">
                <el-input type="text" v-model="form.index"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import imgUpload from '../../components/imgUpload'
    import { Message } from 'element-ui';

    export default {
        components:{
            imgUpload
        },
        data() {
            return {
                form:{
                    title:'',
                    icon:'',
                    index:'',
                },
                categoryId:'',
                bookInfo:{}
            }
        },
        methods: {
            onSubmit() {
                this.$axios.put('/category/'+this.categoryId,this.form).then(res => {
                    console.log(res);
                    if(res.code == 200){
                        Message.success(分类修改成功)
                    }
                })
            }
        },
        created(){
            console.log(this.$route.query.id);
            this.categoryId = this.$route.query.id;
            this.$axios.get('/category/'+this.categoryId).then(res => {
                console.log(res);
                this.bookInfo = res.data
            })
        }
    }
</script>

<style scoped lang="scss">
    .category-edit{
        width: 1000px;
        height: 200px;
        margin-left: 210px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .side{
            display: flex;
            margin: auto;
            font-weight: 600;
            font-size: 25px;
        }
        .form-left{
            width: 400px
            
        }
        .img{
            width: 80px;
            height: 80px;
            border-radius: 50px
        }
        .form-right{
            width: 400px
        }
    }
</style>