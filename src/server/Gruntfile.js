module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint : {
      options: {
        asi: true,
      },
      dev: ['Gruntfile.js', 'src/*.js'],
      questions: ['src/models/questions.js'],
      allFiles: ['src/*.js', '!src/**/_*.js']
    },
    concat : {
      js: {
//        options: {
//          footer: ';'
//        },
        files: {
          'src/models/questions.js' : ['src/models/questions/base.js', 
            'src/models/questions/_*.js', 'src/models/questions/footer.js'],
        }
      }
    },
    watch : {
      js: {
        files: ['src/**/_*.js', 'src/**/base.js', 'src/**/footer.js'],
        tasks: ['concat:js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('lint', ['jshint:allFiles']) ;
}
