var Encore = require('@symfony/webpack-encore');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  
    .setOutputPath('public/build/')
   
    .setPublicPath('/build')
  
    .addEntry('app', './assets/app.js')
    .enableVueLoader()
    .addStyleEntry('tailwind', './assets/styles/tailwind.css')
   
    .enablePostCssLoader()
    
    .splitEntryChunks()

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
 
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

  
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .addPlugin(new VuetifyLoaderPlugin())
  
    .enableSassLoader(options => {
        options.implementation = require('sass')
        
    })

;

module.exports = Encore.getWebpackConfig();
