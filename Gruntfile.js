module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      html: {
        options: {
                    htmlhintrc: '.htmlhintrc'
            
        },
          src: ['*.html']
          
      }
                
    }
                
  });

    grunt.loadNpmTasks('grunt-htmlhint');/*加载插件*/

      grunt.registerTask('default', ['htmlhint']);/*任务注册*/

};


