### markdown转换成html网址https://github.com/evilstreak/markdown-js
	#确保node npm 已安装
	#初始化 npm init 
	#项目目录下安装 npm install markdown --save

###把生成的html文件浏览器打开，可以看到页面结构
   #若出现乱码，原因是没有设置meta标签，把内容放到body中即可
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>markdown转换成html</title>
</head>
  <body>
  </body>
</html>

###解决上一步骤手动生成html结构的问题，使用模板引擎artTemplate

###安装art-template
	#npm install art-template --save

### <>尖括号被转译的解决：
 #template.config('escape', false);

###修改css样式，引入markdown的css样式，参考案例

###高亮显示参考highlight.js