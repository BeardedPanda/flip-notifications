let mix = require('laravel-mix');

mix.options({ imgLoaderOptions: { enabled: false } })
    .js('src/index.js', 'dist/notifications.js')
   .sass('src/scss/styles.scss', 'dist/')
   .sass('src/scss/demo.scss', 'dist/')
    .setPublicPath('./');
