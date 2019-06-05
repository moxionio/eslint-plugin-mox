const path = require('path');

module.exports = {
   configs: {
       moxConfig: {
           settings: {
               'import/resolver': {
                   webpack: {
                       config: path.resolve('./webpack.conf.js')
                   }
               }
           }
       }
   }
};