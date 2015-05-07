Package.describe({
  name: 'mysyfy:notifyjs-wrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for notifyjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mysyfy/meteor-notifyjs-wrapper.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['notify.js','notifyjs-wrapper.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mysyfy:notifyjs-wrapper');
  api.addFiles(['notify.js','notifyjs-wrapper-tests.js']);
});
