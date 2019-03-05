module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
                'css/layout.css': 'less/layout.less'
             }
         }
       }
   });

    grunt.loadNpmTasks('grunt-contrib-less');//加载包含 "less" 任务的插件

      grunt.registerTask('default', ['less']);//默认被执行的列表  任务注册

};

