module.exports = {
    apps:[{
        name: 'bowling_app',
        script: './app.js',
        instances: 1,
        exec_mode: 'cluster'
    }]
}