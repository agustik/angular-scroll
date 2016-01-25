module.exports = function (grunt) {
  var banner = '/*! \n NAME: <%= pkg.name %>\n LICENSE: <%= pkg.license %> \n VERSION: v<%= pkg.version %>\n AUTHOR: <%= pkg.author %> \n BUILD: <%= grunt.template.today("yyyy-mm-dd") %> */ \n \n'
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat :{
        options : {
          banner: banner
        },
        js : {
          src : ['src/app.*.js'],
          dest : 'dist/angular-scroll.js'
        }
      },
      uglify : {
        options: {
            banner: banner,
            compress: true,
            mangle: true,
            sourceMap: true
        },
        target: {
            src: 'dist/angular-scroll.js',
            dest: 'dist/angular-scroll.min.js'
        }
      },
      watch : {
        js : {
          files : ['dist/*.js' ],
          tasks : ['uglify']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','uglify']);
  };
