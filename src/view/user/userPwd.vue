<template>
    <div class="user-pwd">
        <el-form label-width="100px" class="demo-ruleForm form">
            <el-form-item label="旧密码">
               <el-input type="text" v-model="pwd.password"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
               <el-input type="password" v-model="pwd.new_password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pwd:{
                    password:'',
                    new_password:''
                }
            }
        },
        methods: {
            submitForm() {
                this.$axios.put('/user/password',this.pwd).then(res => {
                    console.log(res);
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .user-pwd{
        margin-left: 210px;
        margin-top: 100px;
        .form{
            width: 400px;
            margin: 0 auto;
        }
    }
</style>