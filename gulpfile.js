/**
* Created by ks on 08/06/17.
*/

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const exec = require('child_process').exec;
const path = require('path');

gulp.task('babel', () => {
	'use strict';
	gulp.src('src/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('lib'));
});

gulp.task('babel:watch', () => {
	'use strict';
	gulp.watch('src/**/*.js', ['babel']);
});

gulp.task('default', ['babel:watch']);