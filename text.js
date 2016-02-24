/*
  Text plugin
*/
exports.translate = function(load) {
  var text = load.source
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029");

  if(System.transpiler === false || true) {
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn "' + text + '";\n});';
  }

  // disabled pending rollout of https://github.com/systemjs/builder/commit/13ed8f896ab2df733252f75d8ed770c2d9e11862
  load.metadata.format = 'esm';
  return 'export default "' + text + '";';
}