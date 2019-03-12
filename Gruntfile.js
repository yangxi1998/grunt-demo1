module.exports = function (grunt) {
  grunt.initConfig({//缩小发布目录的所有内容
      
        cssmin: {  
            // rectangle.min.css': 'rectangle.css'
          target:{
            files:[{
              src: ['*.css'],
              dest: 'release/rectangle.css'

            }]
           }
             
        }
                  
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', ['cssmin']); 

};
