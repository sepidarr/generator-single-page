module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      html: {
        src: ["app/header.html", "app/sections/*.html", "app/footer.html"],
        dest: "build/index.html"
      },
      stylesheets: {
        src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
        dest: 'app/css/libs.css'
      },
      scripts: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'app/js/libs.js'
      }
    },
    sass: {
      all: {
				options: {
					sourcemap: 'none'
				},
				files: {
          'app/css/styles.css' : 'app/css/sass/styles.sass'
        }
			}
    },
    cssmin: {
      css: {
        files: {
          'build/css/libs.min.css': ['app/css/libs.css'],
					'build/css/styles.min.css': ['app/css/styles.css']
				}
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/libs.min.js': ['app/js/libs.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('build', ['concat', 'sass', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['build']);
};
