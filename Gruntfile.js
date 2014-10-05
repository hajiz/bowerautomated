module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerInstall: {
      target: {

        src: [
            'index.html'
        ],

        dependencies: true,
        devDependencies: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default', ['bowerInstall']);
};
