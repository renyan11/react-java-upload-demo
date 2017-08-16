快速构建React+webpack应用：yeoman<br/>
1.确保自己有nodejs <br/>
2.全部安装yeoman：<br/>
  npm(cnpm) install -g yo <br/>
3.直接安装脚手架<br/>
  npm(cnpm) install -g generator-reactpackage <br/>
4.假设在E:\目录下  <br/>
  mkdir react-ajax-uploadDemo  <br/>
  yo reactpackage  <br/>
5.应用目录已经生成  <br/>
	├── data
	│ └── test.json
	├── src
	│ ├── components
	│ │ └── App.js
	│ ├── images
	│ │ └── yeoman.png
	│ ├── styles
	│ │ └── app.scss
	│ ├── vendor
	│ │ └── jquery.js
	│ ├── views
	│ │ └── home.html
	├── node_modules
	├── index.html
	├── package.json
	└── webpack.config.js
6. npm(cnpm) install <br/>
7. 项目开发过程使用，启动服务，实时刷新 <br/>
   npm(cnpm) run dev  <br/>
8. 开发完成之后打包文件（js、css分开打包） <br/>
   npm(cnpm) run build  <br/>
9. 浏览器输入 http://localhost:8888

  

