/*
  Text plugin
*/
if (typeof window === "undefined") { // If bundling
  exports.translate = function(load) {
    var text = JSON.stringify(load.source);
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + text + ';\n});';
  }
} else { // If loading in browser
  exports.instantiate = function(load) {
    return load.source;
  }
}
