var regx = /^(https\:\/\/(www\.youtube\.com)\/watch\?v\=([0-9a-zA-Z\_\-]+)|https\:\/\/(vimeo\.com)\/(((.+)\/(.+))\/([0-9]+)|([0-9]+)))/;
var sources = {
  vimeo: 'https://player.vimeo.com/video/{id}?portrait=0&amp;badge=0',
  youtube: 'https://www.youtube.com/embed/{id}'
};

function data(id, type) {
  return {
    'id': id,
    'type': type,
    'src': sources[type].replace('{id}', id)
  };
}

function src(url) {
  var res = url && url.toString().match(regx);

  if (!res) {
    return null;
  }

  // Youtube
  if (res.indexOf('www.youtube.com') !== -1) {
    return data(res[3], 'youtube');
  }

  // Vimeo
  if (res.indexOf('vimeo.com') !== -1) {
    return data(res[9] || res[10], 'vimeo');
  }

  return null;
}

module.exports.src = src;
