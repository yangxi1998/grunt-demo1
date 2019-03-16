    
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
                configFile: '.eslintrc.json'
          
      },
     target: ['*.js']
        
    }
              
  });

    grunt.loadNpmTasks('grunt-eslint');//加载插件
    grunt.registerTask('default', ['eslint']);//任务注册

};
