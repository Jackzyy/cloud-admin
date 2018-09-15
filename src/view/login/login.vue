<template>
    <div class="container">
        <h1>欢迎来到猿书后台操作系统</h1>
        <div class="login-box">
            <h2>请登录</h2>
            <el-form label-width="100px" class="box-form">
                <el-form-item label="用户名">
                  <el-input type="username" v-model="formData.username" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="formData.password" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="btn" @click="handleLogin" :loading="isLoading">登录</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>

<script>
import { Message } from 'element-ui';

export default {
  data() {
    return {
      formData:{
        username: '',
        password: ''
      },
      isLoading:false
    };
  },
  methods: {
    handleLogin() {
      this.isLoading = true
      // console.log(this.$axios);
      // console.log(this.formData.username);
      // console.log(this.formData.password);
      this.$axios.post('/login',this.formData).then(res => {
        console.log(res);
        if (res.code == 200) {
          Message.success(res.msg)
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000);
        }
      }).catch(err => {
        this.isLoading = true
        console.log(err);
      })
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
h1{
    text-align: center;
    color: #fff;
    margin-top: 50px;
}
.container {
  height: 100vh;
  overflow: hidden;
  background-color: #545c64;
}
.login-box {
  width: 500px;
  height: 350px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  margin: 20px auto;
  border-radius: 6px;
  h2{
    text-align: center;
    margin-top: 26px;
  }
}
.box-form{
    margin-top: 50px;
    padding: 0 30px;
    margin-right: 55px;
}
.btn{
    width: 100%;
}
</style>