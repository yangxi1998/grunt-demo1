module.exports = function (grunt) {
  grunt.initConfig({
    mochacli: {
      options: {
            reporter: 'spec',
             bail: true
          
      },
        all: ['test/*.js']
                         
    },
    mocha_istanbul: {
    coverage: {
          src: 'test'
                  
    }
        
    }
      
  });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('default', ['mochacli']);   
    grunt.registerTask('cover', ['mocha_istanbul']);

};
