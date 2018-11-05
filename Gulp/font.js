var gulp 		 = require('gulp');
var config 		 = require('../package.json').config; 
 
gulp.task('font', function () {
	gulp.src(config.src.font)	
    	.pipe(gulp.dest(config.dist.font));
});
 
gulp.task('font:watch', function () {
  gulp.watch(config.src.font, ['font']);
});