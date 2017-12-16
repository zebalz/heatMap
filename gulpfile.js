const es = require('event-stream')
const gulp = require('gulp')
const minimist = require('minimist')
const fs = require('fs')
const _ = require('lodash')
const path = require('path')
const mergeStream = require('merge-stream')
const stripAnsi = require('strip-ansi')

const plugins = require('gulp-load-plugins')()
const { concat, uglify, zip, plumber, babel, notify, stripComents: strip } = plugins
const gulpif = plugins.if

var scripts = require('./content/vendor.scripts.json')

var source = {
    js: {
        src: [
            // root module file
            'content/client/module.js',

            // subordinate module files
            'content/client/**/module.js',

            // other js files [controllers, services, etc]
            'content/client/**/!(module)*.js'
        ]
    }
}

var destinations = {
    js: 'content/build'
}

const appWasBroken = {
    js: false
}

gulp.task('js', buildApp('js'))

// creates taskl to concat angular files

function buildApp (fileset) {
    return function () {
        let isBroken = false

        gulp.src(source[fileset].src)
        .pipe(plumber({
            errorHandler: error => {
                isBroken = true
                appWasBroken[fileset] = true
                const strippedError = Object.create(error)
                strippedError.stack = stripAnsi(error.stack)
                return notify.onError('<%= error.stack %>')(strippedError)
            }
        }))
    }
}