<template>
    <div class="book-edit">
        <el-form ref="form" :model="form" label-width="100px" class="form-right">
            <el-form-item label="标题：">
                <span>{{form.title}}</span>
            </el-form-item>
            <el-form-item label="作者：">
                <el-input type="text" v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="书本图标：">
                <imgUpload v-model="form.img"></imgUpload>
            </el-form-item>
            <el-form-item label="优先级：">
                <el-input type="text" v-model="form.index"></el-input>
            </el-form-item>
            <el-form-item label="分类：">
                <el-select v-model="form.type" placeholder="请选择" @blur="blur">
                    <el-option
                        v-for="item in categoryTitle"
                        :key="item.value"
                        :label="item.title"
                        :value="item.type"
                        >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="描述：">
                <el-input type="textarea" v-model="form.desc"></el-input>
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
                categoryTitle:[],
                form:{
                    book_id:'',
                    index:'',
                    desc:'',
                    author:'',
                    img:'',
                    type:''
                },
                category:{
                    params:{
                        pn:998,
                        size:998
                    }
                },
                bookId:''
            }
        },
        methods: {
            blur(e){
                console.log(e);
                console.log(this.form.type);
            },
            onSubmit() {
                let params = {
                    ...this.form,
                    book_id:this.bookId
                }
                this.$axios.put('/book',params).then(res => {
                    console.log(res);
                    if(res.code == 200){
                        Message.success('图书修改成功')
                        setTimeout(() => {
                            this.$router.push('/home/bookList')
                        }, 1000);
                    }
                })
            },
            getCategory(){
                this.$axios.get('/category',this.category).then(res => {
                    console.log('category',res);
                    res.data.forEach((element,index) => {
                        let obj = {
                            value:index,
                            title:element.title,
                            type:element._id
                        }
                        this.categoryTitle.push(obj)
                    });
                    console.log(this.categoryTitle);
                })
            },
            getBook(bookId){
                this.$axios.get('/book/'+bookId).then(res => {
                    console.log(res)
                    this.form = res.data
                    console.log(this.form);
                })
            }
        },
        created(){
            console.log(this.$route.query.id);
            this.bookId = this.$route.query.id;
            this.getCategory()
            this.getBook(this.bookId)
        }
    }
</script>

<style scoped lang="scss">
    .book-edit{
        width: 1000px;
        height: 550px;
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