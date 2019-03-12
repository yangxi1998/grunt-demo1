module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
                collapseWhitespace: true, //去掉空格
          preserveLineBreaks: false  //去掉换行
          
      },
  files: {
            src: './index.html',
          dest: 'dist/index.html'
          
  }
        
      
    }
                          
               
  });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.registerTask('default', ['htmlmin']);

};
