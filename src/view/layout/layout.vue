<template>
    <div class="layout">
        <div class="header">
            <span>猿书后台操作系统</span>
            <span></span>
        </div>
        <div class="sidebar">
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
    export default {
        
    }
</script>

<style scoped lang="scss">
    *{margin: 0;padding: 0;}
    .sidebar{
        width: 210px;
        background-color: #545c64;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0
    }
    .header{
        height: 60px;
        margin-left: 210px;
        line-height: 60px;
        font-size: 25px;
        border-bottom: 1px solid #f1f1f1;
        text-align: center
    }
</style>