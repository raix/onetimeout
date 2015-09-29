Package.describe({
  name: 'raix:onetimeout',
  summary: 'Adds OneTimeout, only run one timeout at a time',
  version: '1.0.4',
  git: 'https://github.com/raix/onetimeout.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('meteor');
  api.addFiles('onetimeout.js');
  api.export('OneTimeout');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('raix:onetimeout');
  api.addFiles('onetimeout-tests.js');
});
