module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      watch: {
        files: {
          'src/css/citylove.css' : 'src/css/app.scss'
        }
      }
    },
    jshint : {
      options: {
        asi: true,
      },
      allFiles: ['Gruntfile.js', 'src/js/*.js'],
      file: ['src/js/**/<%= grunt.task.current.args[0] %>']
    },
    concat : {
      js: {
        options: {
          footer: ';'
        },
        files: {
          'src/js/services.js' : ['src/js/services/base.js', 'src/js/services/_*.js'],
          'src/js/controllers.js' : ['src/js/controllers/base.js', 'src/js/controllers/_*.js'],
          'src/js/directives.js' : ['src/js/directives/base.js', 'src/js/directives/_*.js'],
        }
      }
    },
    watch : {
      css: {
        files: ['src/css/**/*.scss'],
        tasks: ['sass:watch']
      },
      js: {
        files: ['src/js/**/_*.js', 'src/js/**/base.js'],
        tasks: ['concat:js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('lint', ['jshint:allFiles']) ;
}
