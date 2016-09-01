const path = require('path');

const framework = (files) => {
    files.unshift({
        pattern: path.resolve(require.resolve('chai-http')),
        included: true,
        served: true,
        watched: false
    });
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-http': ['factory', framework]};
