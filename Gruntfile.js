module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: '.'
        },
      },
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/all.min.js': [
            'js/jquery.min.js', 
            'js/bootstrap.min.js', 
            'js/jquery.stellar.min.js', 
            'js/waypoints.min.js', 
            'js/waypoints-sticky.min.js', 
            'js/main.js',
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: [
          '**/*',
          '!**/node_modules/**',
          '!js/all.min.js',
          '!css/main.css',
        ],
        tasks: ['sass', 'uglify'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  grunt.registerTask('default', ['sass', 'uglify']);
  grunt.registerTask('dev', ['default', 'connect', 'watch']);
};