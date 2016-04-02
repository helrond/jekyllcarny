module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      serve: {
          options: {
          serve: true,
          verbose: true,
          incremental: true
        }
      },
      build: {
        options: {
          serve: false,
          verbose: true
        }
      }
    },
    gitadd: {
      task: {
        files: {
          src: ['.']
        }
      }
    },
    gitcommit: {
      your_target: {
        options: {
          message: 'Site deployed'
        },
        files: {
            src: ['.']
        }
      }
    },
    gitpush: {
      your_target: {
        options: {
          remote: 'origin',
          branch: 'master'
        }
      }
    },
    gitpull: {
      your_target: {
        options: {
          remote: 'origin',
          branch: 'master'
        }
      }
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'server.com',
          port: 21
        },
        src: '_site',
        dest: '/path/to/destination/folder'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  grunt.registerTask('deploy', ['jekyll:build', 'ftp-deploy:build', 'gitadd', 'gitcommit']);
  grunt.registerTask('preview', ['jekyll:serve']);

};
