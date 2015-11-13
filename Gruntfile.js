module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controller: {
                src: 'client/scripts/controllers/*.js',
                dest: 'server/public/assets/scripts/controllers.min.js'
            }

        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: [
                    "bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            angular: {
                expand: true,
                cwd: 'node_modules/angular',
                src: [
                    "angular.min.js",
                    "angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules/angular-route',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularChart: {
                expand: true,
                cwd: 'node_modules/angular-chart.js/dist',
                src: [
                    "angular-chart.min.js",
                    "angular-chart.min.js.map",
                    "angular-chart.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "*",
                    "*/*"
                ],
                "dest": "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: 'client/styles/',
                src: [
                    "style.css"
                ],
                "dest": "server/public/assets/styles/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};