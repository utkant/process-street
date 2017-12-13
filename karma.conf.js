//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',
        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
            'bower_components/blueimp-file-upload/js/jquery.fileupload.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app.js',
            'components/**/*.js',
            'views/**/*.js',
            './**/*.html'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-junit-reporter'
        ],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        preprocessors: {
            './**/*.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'templates' //you can name this whatever you want
        }
    });
};
