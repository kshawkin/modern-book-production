/*jslint node */
/*globals console */

// NOTE: gulp-responsive-images requires GraphicsMagick to be installed.
// See https://github.com/dcgauld/gulp-responsive-images for details.

var gulp = require('gulp'),
    responsive = require('gulp-responsive-images'),
    newer = require('gulp-newer'),
    gm = require('gulp-gm'),
    svgmin = require('gulp-svgmin'),
    fileExists = require('file-exists');

// set up paths for later
var paths = {
    img: {
        source: '_source/images/',
        output: 'images/'
    },
    js: {
        src: 'js/',
        dest: 'js/'
    }
};

// Set bitmap filetypes to convert, comma separated, no spaces.
var filetypes = 'jpg,jpeg,gif,png';

// Output file sizes in px
var sizes = {
    default: "512",
    large: "256",
    medium: "128",
    small: "64"
};

// User guidance
console.log('If you\'re having trouble with image conversions, check that you have GraphicsMagick installed (http://www.graphicsmagick.org/).');

// Minify and clean SVGs and copy to destinations.
gulp.task('images:svg', function (done) {
    'use strict';
    console.log('Processing SVG images from ' + paths.img.source);
    gulp.src(paths.img.source + '*.svg')
        .pipe(svgmin({
            plugins: [{
                removeAttrs: {attrs: 'data.*'}
            }, {
                removeUnknownsAndDefaults: {
                    defaultAttrs: false
                }
            }]
        }).on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest(paths.img.output));
    done();
});

// Take the source images and optimise and resize them
gulp.task('images:optimise', function (done) {
    'use strict';
    console.log('Processing images from ' + paths.img.source);
    if (fileExists.sync('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc')) {
        gulp.src(paths.img.source + '*.{' + filetypes + '}')
            .pipe(newer(paths.img.output))
            .pipe(responsive({
                '*': [{
                    width: sizes.default,
                    quality: 90,
                    upscale: false
                }]
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gm(function (gmfile) {
                return gmfile.profile('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc').colorspace('rgb');
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gulp.dest(paths.img.output));
    } else {
        console.log('Colour profile _tools/profiles/sRGB_v4_ICC_preference_displayclass.icc not found. Exiting.');
        return;
    }
    done();
});

// Make small size images for web use in srcset
gulp.task('images:small', function (done) {
    'use strict';
    console.log('Creating small web images from ' + paths.img.source);
    if (fileExists.sync('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc')) {
        gulp.src(paths.img.source + '*.{' + filetypes + '}')
            .pipe(newer(paths.img.output))
            .pipe(responsive({
                '*': [{
                    width: sizes.small,
                    quality: 90,
                    upscale: false,
                    suffix: '-' + sizes.small
                }]
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gm(function (gmfile) {
                return gmfile.profile('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc').colorspace('rgb');
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gulp.dest(paths.img.output));
    } else {
        console.log('Colour profile _tools/profiles/sRGB_v4_ICC_preference_displayclass.icc not found. Exiting.');
        return;
    }
    done();
});

// Make medium size images for web use in srcset
gulp.task('images:medium', function (done) {
    'use strict';
    console.log('Creating medium web images from ' + paths.img.source);
    if (fileExists.sync('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc')) {
        gulp.src(paths.img.source + '*.{' + filetypes + '}')
            .pipe(newer(paths.img.output))
            .pipe(responsive({
                '*': [{
                    width: sizes.medium,
                    quality: 90,
                    upscale: false,
                    suffix: '-' + sizes.medium
                }]
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gm(function (gmfile) {
                return gmfile.profile('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc').colorspace('rgb');
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gulp.dest(paths.img.output));
    } else {
        console.log('Colour profile _tools/profiles/sRGB_v4_ICC_preference_displayclass.icc not found. Exiting.');
        return;
    }
    done();
});

// Make large size images for web use in srcset in _includes/figure
gulp.task('images:large', function (done) {
    'use strict';
    console.log('Creating large web images from ' + paths.img.source);
    if (fileExists.sync('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc')) {
        gulp.src(paths.img.source + '*.{' + filetypes + '}')
            .pipe(newer(paths.img.output))
            .pipe(responsive({
                '*': [{
                    width: sizes.large,
                    quality: 90,
                    upscale: false,
                    suffix: '-' + sizes.large
                }]
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gm(function (gmfile) {
                return gmfile.profile('_tools/profiles/sRGB_v4_ICC_preference_displayclass.icc').colorspace('rgb');
            }).on('error', function (e) {
                console.log(e);
            }))
            .pipe(gulp.dest(paths.img.output));
    } else {
        console.log('Colour profile _tools/profiles/sRGB_v4_ICC_preference_displayclass.icc not found. Exiting.');
        return;
    }
    done();
});

// when running `gulp`, do the image tasks
gulp.task('default', gulp.parallel(
    'images:svg',
    'images:optimise',
    'images:small',
    'images:medium',
    'images:large'
));
