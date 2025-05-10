<!-- 登录页面 -->
<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 字符集为UTF-8 -->
    <meta charset="UTF-8">
    <!-- 设置浏览器兼容性 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>基米外卖-登录</title>
    
    <link rel="stylesheet" href="./color.css">
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script> -->
</head>
<body>
    <div class="centered-box">
        <!-- 左侧图片 -->
        <div class="image-side"></div>
        
        <!-- 右侧文字 -->
        <div class="text-side" id="main">
            <h1 id="title">欢迎使用基米外卖</h1>
            <div  id="input">
                <form style="line-height: 2.5; color: #333;font-size: 20px;" action="" method="post">
                    我是：<select  style="height: 30px;" name="identity">
                        <option value="1">个人</option>
                        <option value="2">商家</option>
                    </select><br>
                    请输入用户名： <input type="text" name="username" id=""><br>
                    请输入密码： <input type="password" name="password" id=""><br>
                    <input style="height: 30px;"  type="submit" value="登录">
                </form>
                <!-- <a href="signInShop.html" style="color: rgb(0, 124, 128); text-decoration: none;">以商家身份登录 →</a> -->
                <a href="createAccount.html" style="color: rgb(0, 124, 128); text-decoration: none;">立即注册 →</a>
            </div>
        </div>
    </div>
</body>
</html>
</template>
  
<script>
  
  export default {
    name: "LoginForm",
  };
</script>
  
<style>
        html, body {
            height: 100%;
            margin: 0;
        }
 
        /* 创建flex容器实现居中 */
        body {
            display: flex;
            justify-content: center;  /* 水平居中 */
            align-items: center;      /* 垂直居中 */
            background-color: #f0f0f0; /* 可选：添加背景色 */
        }
        .centered-box {
            width: 60vw;
            height: 50vh;
            display: flex;
            border-radius: 15px;
            overflow: hidden; /* 确保圆角对背景图片生效 */
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
 
        /* 左侧图片区域 */
        .image-side {
            flex: 1; /* 占据50%宽度 */
            background-image: url("logo.png");
            background-size: cover;
            background-position: center;
        }
 
        /* 右侧文字区域 */
        .text-side {
            flex: 1; /* 占据50%宽度 */
            background-color: white;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        #hj{
            color: green;
        }
        a{
            color: black;
            text-decoration: none;
        }
        #main{
            color:black
        }
        body{
            background-image: url("background.jpg");
            background-size: cover;
        }
        #logo{
            width:50%;
            padding:15%,15%;
        }
        #title{
            color: black;
        }
        
    </style>

