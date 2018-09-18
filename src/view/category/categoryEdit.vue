<template>
    <div class="category-edit">
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
            }
        },
        methods: {
            onSubmit() {
                this.$axios.put('/category/'+this.categoryId,this.form).then(res => {
                    console.log(res);
                    if(res.code == 200){
                        Message.success('分类修改成功')
                        setTimeout(() => {
                            this.$router.push('/home/categoryList')
                        }, 1000);
                    }
                })
            }
        },
        created(){
            // console.log(this.$route.query.id);
            this.categoryId = this.$route.query.id;
            this.$axios.get('/category/'+this.categoryId).then(res => {
                console.log(res);
                this.form = res.data
            })
        }
    }
</script>

<style scoped lang="scss">
    .category-edit{
        width: 1000px;
        margin-left: 210px;
        margin-top: 50px;
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