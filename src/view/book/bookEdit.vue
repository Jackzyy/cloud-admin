<template>
    <div class="book-edit">
        <el-form ref="form" :model="form" label-width="100px" class="form-right">
            <el-form-item label="作者：">
                <el-input type="text" v-model="bookInfo.author"></el-input>
            </el-form-item>
            <el-form-item label="书本图标：">
                <imgUpload v-model="bookInfo.img"></imgUpload>
            </el-form-item>
            <el-form-item label="优先级：">
                <el-input type="text" v-model="bookInfo.index"></el-input>
            </el-form-item>
            <el-form-item label="标题：">
                <el-input type="text" v-model="bookInfo.title"></el-input>
            </el-form-item>
            <el-form-item label="分类：">
                <el-input type="text" v-model="bookInfo.type"></el-input>
            </el-form-item>
            <el-form-item label="描述：">
                <el-input type="textarea" v-model="bookInfo.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改图书</el-button>
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
                    book_id:'',
                    index:'',
                    desc:'',
                    author:'',
                    img:'',
                    type:''
                },
                id:{
                    params:{
                        bookId:''
                    }
                },
                bookId:'',
                bookInfo:{}
            }
        },
        methods: {
            onSubmit() {
                this.$axios.put('/book',this.form).then(res => {
                    console.log(res);
                    if(res.code == 200){
                        Message.success(图书修改成功)
                    }
                })
            }
        },
        created(){
            console.log(this.$route.query.id);
            this.bookId = this.$route.query.id;
            this.$axios.get('/book/'+this.bookId,this.id).then(res => {
                console.log(res);
                this.bookInfo = res.data
            })
        }
    }
</script>

<style scoped lang="scss">
    .book-edit{
        width: 1000px;
        height: 350px;
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