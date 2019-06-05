const path = require('path');

module.exports = {
    configs: {
        moxConfig: {
            plugins: ["mox"],
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