/*
  Text plugin
*/
module.exports = function(name, address, fetch, callback, errback) {
  fetch(address, function(text) {
    callback('module.exports = "'
    + text
      .replace(/(["\\])/g, '\\$1')
      .replace(/[\f]/g, "\\f")
      .replace(/[\b]/g, "\\b")
      .replace(/[\n]/g, "\\n")
      .replace(/[\t]/g, "\\t")
      .replace(/[\r]/g, "\\r")
      .replace(/[\u2028]/g, "\\u2028")
      .replace(/[\u2029]/g, "\\u2029")
    + '";');
  }, errback);
}