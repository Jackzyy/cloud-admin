<template>
    <div class="category-add">
        <el-form ref="form" :model="form" label-width="100px" class="form">
            <el-form-item label="类别名称">
                <el-input 
                    v-model="form.title"
                    placeholder="请输入内容"
                    clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="类别图标">
                <imgUpload v-model="form.icon"></imgUpload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import imgUpload from '@/components/imgUpload'
    import { Message } from 'element-ui';

    export default {
        components:{
            imgUpload
        },
        data() {
            return {
                form:{
                    title:'',
                    icon:''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$axios.post('/category',this.form).then(res => {
                    console.log(res);
                    if (res.code == 200) {
                        Message.success('分类添加成功')
                        setTimeout(() => {
                            this.$router.push('/home/categoryList')
                        }, 1000);
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .category-add{
        margin-left: 210px;
        margin-top: 20px;
        .form{
            width: 400px;
        }
    }
</style>