/*
  Text plugin
*/
exports.translate = function(load) {
  if (System.transpiler === false || true) {
    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
  }

  // disabled pending rollout of https://github.com/systemjs/builder/commit/13ed8f896ab2df733252f75d8ed770c2d9e11862
  load.metadata.format = 'esm';
  return 'export default ' + JSON.stringify(load.source) + ';';
}