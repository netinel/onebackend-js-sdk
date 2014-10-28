module.exports = function (grunt) {

    grunt.initConfig({

        watch: {
            uglify: {
                files: 'js/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },

        uglify: {
            options: {
                mangle: false //Specify mangle: false to prevent changes to your variable and function names.
            },
            my_target: {
                files: {
                    'dist/onebackend-js-sdk.min.js': ['js/onebackend.js']
                }
            }
        },

        jshint: {
            all: ['js/onebackend.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', function(){

    });

};
