module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
		  sass: {
		    files: ['sass/modules/*.scss', 'sass/*.scss', 'app/css/*.css', 'js/*.js'],
		    tasks: ['sass'],
		  },
		},
		sass: {
			css: {
				options: {
					sourcemap: 'none',
				},
				files: {
					'app/css/main.css': 'sass/main.scss'
				},
			},
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'sass/*.scss',
                        'app/css/*.css',
                        'app/*.html',
                        'app/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['browserSync', 'watch']);
};