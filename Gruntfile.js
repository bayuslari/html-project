module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'css/style.css': ['scss/style.scss']
        }
      }
    },
    // uglify: {
    //   build: {
    //     files: {
    //       'js/app.min.js': ['js/*.js']
    //     }
    //   }
    // },
    codekit: {
      files: {
        src: ['**/*.kit'],
        dest: 'html/.'
      }
    },
    // copy: {
    //   main: {
    //     files: [
    //       {
    //         expand: true,
    //         cwd: 'src',
    //         src: ['vendor/**'],
    //         dest: '/',
    //         filter: 'isFile'
    //       },
    //       {
    //         expand: true,
    //         cwd: 'src',
    //         src: ['img/**'],
    //         dest: 'build/',
    //         filter: 'isFile'
    //       },
    //     ],
    //
    //   },
    // },
    watch: {
      options: {
        livereload: true,
      },
      scss: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: { livereload: true },
      },
      // uglify: {
      //   files: ['js/*.js'],
      //   tasks: ['uglify'],
      //   options: { livereload: true },
      // },
      codekit: {
        files: ['**/*.kit'],
        tasks: ['codekit'],
        options: { livereload: true },
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: {
            target: 'http://localhost:9000/html/'
          }
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect','watch']);
  require('load-grunt-tasks')(grunt);
}
