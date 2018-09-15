<template>
    <div class="user-add">
        <span>用户添加</span>
        <div class="content">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名称">
                    <el-input 
                        v-model="form.username"
                        placeholder="请输入内容"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-input 
                        v-model="form.password"
                        placeholder="请输入内容"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input
                        placeholder="请输入内容"
                        v-model="form.desc"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="用户邮箱">
                    <el-input
                        placeholder="请输入内容"
                        v-model="form.email"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="用户昵称">
                    <el-input
                        placeholder="请输入内容"
                        v-model="form.nickname"
                        clearable>
                    </el-input>
                </el-form-item>
                <el-form-item label="上传头像">
                    <imgUpload v-model="form.avatar"></imgUpload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即添加</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import imgUpload from '@/components/imgUpload'

    export default {
        components: {
            imgUpload
        },
        data() {
            return {
                form: {
                    username:'',
                    password:'',
                    desc:'' ,
                    avatar:'',
                    email:'',
                    nickname:'',
                },
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                this.form.avatar = file.url
            },
            onSubmit() {
                this.$axios.post('/user',this.form).then(res => {
                    console.log(res);
                    this.$router.push('/home/userList')
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .user-add{
        margin-left: 210px;
        margin-top: 20px;
        span{
            font-size: 25px;
            font-weight: 500;
            text-align: center;
        }
        .content{
            width: 400px;
            margin: 0 auto;
        }
    }

</style>