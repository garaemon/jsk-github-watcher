module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: [
        'Gruntfile.js',
        './routes/*.js',
        './models/*.js',
        '*.js'
      ]
    },
    watch: {
      files: ['*.js', './routes/*.js', 'Gruntfile.js', '.jshintrc'],
      tasks: ['build']
    }
  });

  // reading npm tasks
  for(var taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) === 'grunt-'.toString()) {
      grunt.loadNpmTasks(taskName);
    }
  }
  
  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('default', ['build']);
};
