module.exports = function (grunt) {
  grunt.initConfig({
    csslint: {
      options: {
            csslintrc: '.csslintrc'
          
      },
        src: ['*.css']
        
    }
               
  });

    grunt.loadNpmTasks('grunt-contrib-csslint');//加载插件
    grunt.registerTask('default', ['csslint']);//任务注册

};
