const gulp = require('gulp')
const eslint = require('gulp-eslint')
const exec = require('gulp-exec')

// Lint main Source
gulp.task('lint', () =>
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

// Tag Releases
gulp.task('tag-release', () => {
  const version = require('./package.json').version
  return gulp.src('.')
    .pipe(exec(`git commit -am "Prepare ${version} release"`))
    .pipe(exec(`git tag v${version}`))
    .pipe(exec(`git push origin : v${version}`))
})

// Generate Docs
gulp.task('docs', () => gulp.src('.')
  .pipe(exec(`jsdoc -c .jsdoc.json`)))

// Run Tests
gulp.task('default', gulp.series('lint'))
