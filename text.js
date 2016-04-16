/*
  Text plugin
*/
exports.translate = function(load) {
  if (System.transpiler === false) {
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
  }
  
  load.metadata.format = 'esm';
  return 'export default ' + JSON.stringify(load.source) + ';';
}
