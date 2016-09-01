# karma-chai-http
Karma plugin for the [chai-http](https://github.com/chaijs/chai-http) plugin.

# Installing

```
$ npm install karma-chai-http --save-dev
```

# Dependencies

To use `karma-chai-http` you also need to install these modules and their respective dependencies:
* [karma-chai](https://www.npmjs.com/package/karma-chai)
* [chai-http](https://github.com/chaijs/chai-http)

# How to Use It

Before doing anything else make sure you've got this module (`karma-chai-http`) and its dependencies (`karma-chai`, `chai-http`) installed.
Now you just need to add `chai-http` to the `frameworks` array in your Karma configuration:

*karma.conf.js*
```js
'use strict';
module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'chai-http', 'chai'],
    plugins: [ 'karma-mocha', 'karma-chai', 'karma-chai-http']
    // The rest of your config file goes here...
  });
}
```

**Karma loads its frameworks in reverse order** and `chai-http` depends on `chai`, so please declare it before `chai` on your frameworks array.

# Credits

This module has been heavily (**very heavily**) inspired by the excelent module [`karma-chai-as-promised`](https://github.com/vlkosinov/karma-chai-as-promised), written by [Vlad Kosinov](https://github.com/vlkosinov).
