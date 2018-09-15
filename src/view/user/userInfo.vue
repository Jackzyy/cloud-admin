<template>
    <div class="user-info">
        <el-form label-width="100px" class="demo-ruleForm form">
            <el-form-item label="用户头像">
                <imgUpload v-model="user.avatar"></imgUpload>
            </el-form-item>
            <el-form-item label="用户签名">
                <el-input v-model="user.desc"></el-input>
            </el-form-item>
            <el-form-item label="用户邮箱">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item label="用户昵称">
                <el-input v-model="user.nickname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import imgUpload from '@/components/imgUpload'
    import { Message } from 'element-ui';

    export default {
        components: {
            imgUpload
        },
        data() {
            return {
                user: {
                    avatar:'',
                    desc:'',
                    email:'',
                    nickname:''
                }
            }
        },
        methods: {
            submitForm() {
                this.$axios.put('/user/userInfo',this.user).then(res => {
                    console.log(res);
                    if(res.code == 200){
                        Message.success('个人信息修改成功!')
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .user-info{
        margin-left: 210px;
        margin-top: 50px;
        .form{
            width: 500px;
        }
    }
</style>