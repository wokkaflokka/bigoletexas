const JavaScriptObfuscator = require('javascript-obfuscator');

module.exports = function(source) {
  const options = this.getOptions();
  const obfuscationResult = JavaScriptObfuscator.obfuscate(source, options);
 
  return obfuscationResult.getObfuscatedCode();
}; 