var gulp = require('gulp');
var nightwatch = require('gulp-nightwatch');
var exec = require('child_process').exec;
var shell = require('gulp-shell');
var exit = require('gulp-exit');



// //////////////////////////////////////////////////////////////////////////////
// Clean comments
// //////////////////////////////////////////////////////////////////////////////

gulp.task('start-www', function() {
    exec('node server.js dev', function(err, stdout, stderr){
        //console.log(stdout);
        //console.log(stderr);
    })
});


// //////////////////////////////////////////////////////////////////////////////
// Start NodeJS local server
// //////////////////////////////////////////////////////////////////////////////

gulp.task('start-www', function() {
    exec('node server.js dev', function(err, stdout, stderr){
        //console.log(stdout);
        //console.log(stderr);
    })
});


// //////////////////////////////////////////////////////////////////////////////
// Start NightWatch for Local mode
// //////////////////////////////////////////////////////////////////////////////

gulp.task('start-nightwatch', ['start-www'], function() {
    return gulp.src('')
        .pipe(shell('docker run --privileged -p 4444:4444 -p 5999:5999 -d vvoyer/docker-selenium-firefox-chrome & sleep 4'))
        .pipe(nightwatch({
            configFile: 'tests/nightwatch.json'
        }))
        .on('error', function() {
            exec('pkill node', function(err, stdout, stderr){
                console.log(stdout);
                console.log(stderr);
            });
        })
});


// //////////////////////////////////////////////////////////////////////////////
// Start NightWatch for CI
// //////////////////////////////////////////////////////////////////////////////

gulp.task('start-nightwatch-ci', ['start-www'], function() {
    return gulp.src('')
        .pipe(nightwatch({
            configFile: 'tests/nightwatch-ci.json'
        }))
        .on('error', function() {
            exec('pkill node', function(err, stdout, stderr){
                console.log(stdout);
                console.log(stderr);
            });
        })
});

// //////////////////////////////////////////////////////////////////////////////
// Call BDD tests for CI
// //////////////////////////////////////////////////////////////////////////////

gulp.task('bdd-ci', ['start-www', 'start-nightwatch-ci'], function() {
    exec('pkill node', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
    });
});


// //////////////////////////////////////////////////////////////////////////////
// Call BDD tests for development mode
// //////////////////////////////////////////////////////////////////////////////

gulp.task('bdd-local', ['start-www', 'start-nightwatch'], function() {
    exec('pkill node', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
    });
});