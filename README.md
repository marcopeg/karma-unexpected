karma-unexpected
================


[Unexpected](https://unexpectedjs.github.io/) for [Karma](http://karma-runner.github.io)

[![NPM version](https://badge.fury.io/js/karma-unexpected.png)](http://badge.fury.io/js/karma-unexpected) 
[![Dependency status](https://david-dm.org/marcopeg/karma-unexpected.png)](https://david-dm.org/marcopeg/karma-unexpected) 
[![devDependency Status](https://david-dm.org/marcopeg/karma-unexpected/dev-status.png)](https://david-dm.org/marcopeg/karma-unexpected#info=devDependencies)



Installation
------------

Install the plugin from npm:

```
$ npm install karma-unexpected --save-dev
```

Or from Github:

```
$ npm install 'git+https://github.com/marcopeg/karma-unexpected.git' --save-dev
```

Add `unexpected` to the `frameworks` key in your Karma configuration:

```
module.exports = function(config) {
  config.set({
    
    # frameworks to load
    frameworks: [..., 'unexpected'],
    
    # ...
  });
};
```


Usage
-----

Unexpected will be available as `expect`:

```
it('should work', function() {
  expect(1, 'to equal', 1);
});
```

License
-------

The MIT License (MIT)

