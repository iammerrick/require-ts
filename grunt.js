module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-rigger');

  grunt.initConfig({
    rig: {
      build: {
        src: ['src/wrapper.js'],
        dest: 'build/ts.js'
      }
    }
  });
  
  grunt.registerTask('build', 'rig:build');
  
};