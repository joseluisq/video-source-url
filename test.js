var test = require('tape');
var videoSourceUrl = require('./');

test('Test Suite', function(t) {
  t.plan(7);

  res = videoSourceUrl.src();
  t.notOk(res, 'Not ok when url param is not passed.');

  res = videoSourceUrl.src(123);
  t.notOk(res, 'Not ok when url param is not a string.');

  res = videoSourceUrl.src('');
  t.notOk(res, 'Not ok when url param is an empty string.');

  res = videoSourceUrl.src('https://www.another.url/watch?v=3cvmONlV5WU');
  t.notOk(res, 'Not ok when an unsupported url is passed.');

  res = videoSourceUrl.src('https://www.youtube.com/watch?v=3cvmONlV5WU');
  t.ok(res, 'Ok when a supported url is passed.');

  res = videoSourceUrl.src('https://www.youtube.com/watch?v=GRxofEmo3HA&list=RDGRxofEmo3HA#t=8');
  t.ok(res, 'Ok when Youtube url is passed.');

  res = videoSourceUrl.src('https://vimeo.com/channels/staffpicks/146901605');
  t.ok(res, 'Ok when Vimeo url is passed.');
});
