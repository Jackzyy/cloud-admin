<template>
    <div class="layout">
        <div class="header">
            <span>猿书后台操作系统</span>
        </div>
        <div class="sidebar">
          <div class="user">
            <img class="img" :src="userInfo.avatar" alt="">
            <el-button class="btn" type="info" round @click="logout">
              管理员登出
            </el-button>
          </div>
            <el-menu
                :router="true"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/userList">用户列表</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/home/userAdd">用户添加</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/home/userPwd">密码重置</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="/home/userInfo">修改个人信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-menu
                :router="true"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>图书管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/bookList">图书列表</el-menu-item>
                    <el-menu-item index="/home/bookAdd">添加图书</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-menu
                :router="true"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>分类管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/categoryList">分类列表</el-menu-item>
                    <el-menu-item index="/home/categoryAdd">添加分类</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <el-menu
                :router="true"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>轮播图管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/sideShow">轮播图列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { Notification } from 'element-ui'
    export default {
      data() {
        return {
          userInfo: {}
        }
      },
      methods: {
        logout() {
          this.$axios.get('/logout').then(res =>{
            console.log(res);
            this.$router.push('/login')
            Notification.success('登出成功')
          })
        }
      },
      created(){
        this.userInfo = {
          ...this.$store.state.userInfo
        }
      }
    }
</script>

<style scoped lang="scss">
    .layout{
      overflow: hidden;
    }
    .sidebar{
        width: 210px;
        background-color: #545c64;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        .user{
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            margin-top: 20px
          }
          .btn{
            margin: 30px;
          }
        }
    }
    .header{
        width: 100%;
        height: 80px;
        margin-left: 210px;
        line-height: 80px;
        font-size: 28px;
        border-bottom: 1px solid #f1f1f1;
        text-align: center;
        background-color: #545c64;
        span{
          margin-left: -180px;
        }
    }
</style>