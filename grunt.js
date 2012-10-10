module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-rigger');

  grunt.initConfig({
    rig: {
      build: {
        src: ['src/wrapper.js'],
        dest: 'build/ts.js'
      }
    },
    min: {
      dist: {
        src: ['build/ts.js'],
        dest: 'build/ts.min.js'
      }
    }
  });
  
  grunt.registerTask('build', 'rig:build min');
  
};