const Generator=require('yeoman-generator')
module.exports=class extends Generator{
    prompting(){
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'Your Project Name',
                default:this.appname
            }
        ]).then(answers=>{
            this.answers=answers
        })
    }
    writing(){
        const templates = [
            'package.json',
            'README.md',
            'yarn.lock',
            'public/favicon.ico',
            'public/index.html',
            'public/logo192.png',
            'public/logo512.png',
            'public/manifest.json',
            'public/robots.txt',
            'src/App.css',
            'src/App.js',
            'src/App.test.js',
            'src/index.js',
            'src/index.css',
            'src/logo.svg',
            'src/reportWebVitals.js',
            'src/setupTests.js',
          ]
          templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
              this.templatePath(item),
              this.destinationPath(item),
              this.answers
            )
          })
    }
}