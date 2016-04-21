'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animatable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _scrollmagic = require('scrollmagic');

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animatable = exports.Animatable = function Animatable() {
  var sceneOptions = arguments.length <= 0 || arguments[0] === undefined ? {
    offset: -120
  } : arguments[0];
  var options = arguments.length <= 1 || arguments[1] === undefined ? {
    elementClass: 'animatable',
    animateClass: 'animated'
  } : arguments[1];
  var elementClass = options.elementClass;
  var animateClass = options.animateClass;
  var offset = options.offset;

  var elements = [].slice.call(document.querySelectorAll('.' + elementClass));

  if (elements.length) {
    var _ret = function () {
      var controller = new _scrollmagic2.default.Controller();

      elements.forEach(function (triggerElement) {
        var scene = new _scrollmagic2.default.Scene(Object.assign({
          triggerElement: triggerElement
        }, sceneOptions)).setClassToggle(triggerElement, animateClass);

        controller.addScene(scene);
      });

      return {
        v: controller
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  return null;
};