import gulp from 'gulp';
import { stylesToConcat } from '../gulp-config';
import { gulpModules } from './modules';

class StyleEngine {

  static buildStyle() {

    return gulp.src(stylesToConcat)
      .pipe(gulpModules.concat('main.css'))
      .pipe(gulpModules.sass().on('error', gulpModules.sass.logError))
      .pipe(gulpModules.autoprefixer())
      .pipe(gulp.dest('dist'))
      .pipe(gulpModules.rename('main.min.css'))
      .pipe(gulpModules.cssnano())
      .pipe(gulp.dest('dist'));

  }

}

export default StyleEngine;
