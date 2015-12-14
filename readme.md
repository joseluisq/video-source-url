# Video Source URL [![Build Status](https://travis-ci.org/joseluisq/video-source-url.svg?branch=master)](https://travis-ci.org/joseluisq/video-source-url)
> Get video source from Youtube or Vimeo URL.

![video-source-url](https://cloud.githubusercontent.com/assets/1700322/11771175/a0d445f0-a1da-11e5-9c34-dccc1f6fd723.gif)

## Install

```sh
$ npm install video-source-url --save-dev
```

## Usage
For now, Youtube and Vimeo urls are supported.

```js
var videoSourceUrl = require('video-source-url');
videoSourceUrl.src('https://www.youtube.com/watch?v=3cvmONlV5WU');
//  {
//    id: '3cvmONlV5WU',
//    type: 'youtube',
//    src: 'https://www.youtube.com/embed/3cvmONlV5WU'
//  }
```

## Contributions
[Pull requests](https://github.com/joseluisq/video-source-url/pulls) and [issues](https://github.com/joseluisq/video-source-url/issues) are be welcome.

## License
MIT license

© 2015 [José Luis Quintana](http://git.io/joseluisq)
