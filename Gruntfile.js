module.exports = function (grunt) {
  grunt.initConfig({
    sprite: {
      all: {
          src: './images/*.png',
          dest: './images/allInOne.png',
          destCss: './sprites.css'
                                                    
      }
          
    }
      
  });

    grunt.loadNpmTasks('grunt-spritesmith');

      grunt.registerTask('default', ['sprite']);

};
