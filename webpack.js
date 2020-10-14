const path = require('path')
const webpackConfig = require('@nextcloud/webpack-vue-config')

const buildMode = process.env.NODE_ENV
const isDev = buildMode === 'development'
webpackConfig.devtool = isDev ? 'cheap-source-map' : 'source-map'

webpackConfig.entry = {
    personalSettings: { import: path.join(__dirname, 'src', 'personalSettings.js'), filename: 'integration_twitter-personalSettings.js' },
    adminSettings: { import: path.join(__dirname, 'src', 'adminSettings.js'), filename: 'integration_twitter-adminSettings.js' },
    dashboard: { import: path.join(__dirname, 'src', 'dashboard.js'), filename: 'integration_twitter-dashboard.js' },
    dashboardHome: { import: path.join(__dirname, 'src', 'dashboardHome.js'), filename: 'integration_twitter-dashboardHome.js' },
}

module.exports = webpackConfig