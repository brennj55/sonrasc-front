let ChartInit = function() {
  var Chart = require('chart.js');
  var Type, cancelAnimFrame, name, _ref;

  cancelAnimFrame = (function() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(callback) {
      return window.clearTimeout(callback, 1000 / 60);
    };
  })();

  _ref = Chart.types;
  for (name in _ref) {
    Type = _ref[name];
    Type.prototype.stop = function() {
      return cancelAnimFrame(this.animationFrame);
    };
  }
}();

export default ChartInit;
