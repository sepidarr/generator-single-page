module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ["app/header.html", "app/sections/*.html", "app/footer.html"],
        dest: "build/index.html"
      },
      css: {
        src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
        dest: 'app/css/libs.css'
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('build', ['concat', 'sass', 'cssmin']);
  grunt.registerTask('default', ['build']);
};
