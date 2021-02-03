let {task,src,dest,watch,series,parallel} = require('gulp')
let load = require('gulp-load-plugins')()
let del = require('del')

task('delDist',async ()=>{
    await del('./dist')
})

// html处理
task('html',async ()=>{
    src(['./*.html','./*.json','./*.md','./*.js'])
    .pipe(dest('./dist'))
    .pipe(load.connect.reload())
})

// css处理
task('css',async ()=>{
    src('./css/*.css')
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())
})


//js处理
task('js',async ()=>{
    src('./js/*.js')
    .pipe(dest('./dist/js'))
    .pipe(load.connect.reload())
})

//json处理
task('data',async ()=>{
    src('./data/*.json')
    .pipe(dest('./dist/data'))
    .pipe(load.connect.reload())
})

//img处理
task('img',async ()=>{
    src('./img/*.*')
    .pipe(dest('./dist/img'))
    .pipe(load.connect.reload())
})

// 启动一个服务，实现自动刷新
task('reload',async ()=>{
    load.connect.server({
      root: './dist',//设置根目录
      livereload: true//开启自动刷新
    })
})

// 监听
task('watch',async ()=>{
    watch('./*.html',series('html'))
    watch('./css/*.css',series('css'))
    watch('./js/*.js',series('js'))
    watch('./img/*.*',series('img'))
    watch('./data/*.json',series('data'))
})

// 打包
task('dev',series('delDist','html','css','js','data','img'))

// 启动
task('start',series('dev','reload','watch'))