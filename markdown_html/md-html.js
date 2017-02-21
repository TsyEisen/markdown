var fs = require('fs');
var path = require('path');
var template = require('art-template');
template.config('escape', false);//配置模板，解决尖括号转译
// 以同步方式读取出模板内容
var templateStr = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')

var markdown = require('markdown').markdown;
fs.readFile(path.join(__dirname,'./README.md'),'utf8',function(err,data){
	if(err){
		throw err
	}
	console.log(markdown.toHTML(data));//基本使用，转换成html形式

	var htmlStr = markdown.toHTML(data);

	var render = template.compile(templateStr);
	var templateHtml = render({
		title:'markdown文件转换为html文件',
		body:htmlStr
	})
	//把转换成的html字符串写入到新的页面文件
	fs.writeFile(path.join(__dirname,'./README.html'),templateHtml,function(err){
		if(err){
			throw err;
		}
		console.log('成功');
	})
})