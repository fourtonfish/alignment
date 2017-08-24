(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function unshiftShiftedElements(shiftedEls) {
  if (shiftedEls.length > 0) {
    /* Only necessary when overflow on body is initially set to hidden.
       Basically, .shifted elements add scrollbar to the browser, before they slide back up.
       But if a page is long, the scrollbar is necessary. 
       
        setTimeout(function(){
          document.body.style.overflow = 'auto';      
        }, shiftedEls.length * 300);
    */
    Array.prototype.forEach.call(shiftedEls, function (el, index) {
      setTimeout(function () {
        el.classList.remove('shifted');
        el.classList.add('unshifted');
      }, 5 * index * index);
    });
  }
}

exports.unshiftShiftedElements = unshiftShiftedElements;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ready;
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

},{}],3:[function(require,module,exports){
"use strict";

var _ready = require("./ready.js");

var _ready2 = _interopRequireDefault(_ready);

var _helpers = require("./helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ready2.default)(function () {
  (0, _helpers.unshiftShiftedElements)(document.getElementsByClassName('shifted'));

  // var styleElement = document.createElement('style');
  // styleElement.type = 'text/css';
  // styleElement.innerHTML = '.row { display: table-cell; }';
  // document.head.appendChild(styleElement);
});

},{"./helpers.js":1,"./ready.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9oZWxwZXJzLmpzIiwic3JjL3NjcmlwdHMvcmVhZHkuanMiLCJzcmMvc2NyaXB0cy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxVQUFoQyxFQUEyQztBQUN6QyxNQUFJLFdBQVcsTUFBWCxHQUFvQixDQUF4QixFQUEwQjtBQUM1Qjs7Ozs7Ozs7QUFRSSxVQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBeUMsVUFBUyxFQUFULEVBQWEsS0FBYixFQUFvQjtBQUMzRCxpQkFDRSxZQUFVO0FBQ1IsV0FBRyxTQUFILENBQWEsTUFBYixDQUFvQixTQUFwQjtBQUNBLFdBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsV0FBakI7QUFDRCxPQUpILEVBS0UsSUFBRSxLQUFGLEdBQVEsS0FMVjtBQU1ELEtBUEQ7QUFRRDtBQUNGOztRQUVPLHNCLEdBQUEsc0I7OztBQ3ZCUjs7Ozs7a0JBRXdCLEs7QUFBVCxTQUFTLEtBQVQsQ0FBZSxFQUFmLEVBQW1CO0FBQ2hDLE1BQUksU0FBUyxVQUFULEtBQXdCLFNBQTVCLEVBQXNDO0FBQ3BDO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsYUFBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsRUFBOUM7QUFDRDtBQUNGOzs7QUNSRDs7QUFFQTs7OztBQUNBOzs7O0FBRUEscUJBQU0sWUFBVTtBQUNkLHVDQUF1QixTQUFTLHNCQUFULENBQWdDLFNBQWhDLENBQXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUQsQ0FSRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gdW5zaGlmdFNoaWZ0ZWRFbGVtZW50cyhzaGlmdGVkRWxzKXtcbiAgaWYgKHNoaWZ0ZWRFbHMubGVuZ3RoID4gMCl7XG4vKiBPbmx5IG5lY2Vzc2FyeSB3aGVuIG92ZXJmbG93IG9uIGJvZHkgaXMgaW5pdGlhbGx5IHNldCB0byBoaWRkZW4uXG4gICBCYXNpY2FsbHksIC5zaGlmdGVkIGVsZW1lbnRzIGFkZCBzY3JvbGxiYXIgdG8gdGhlIGJyb3dzZXIsIGJlZm9yZSB0aGV5IHNsaWRlIGJhY2sgdXAuXG4gICBCdXQgaWYgYSBwYWdlIGlzIGxvbmcsIHRoZSBzY3JvbGxiYXIgaXMgbmVjZXNzYXJ5LiBcbiAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7ICAgICAgXG4gICAgfSwgc2hpZnRlZEVscy5sZW5ndGggKiAzMDApO1xuKi8gICAgXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzaGlmdGVkRWxzLCBmdW5jdGlvbihlbCwgaW5kZXgpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpZnRlZCcpO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3Vuc2hpZnRlZCcpO1xuICAgICAgICB9LFxuICAgICAgICA1KmluZGV4KmluZGV4KTtcbiAgICB9KTtcbiAgfSAgXG59XG5cbmV4cG9ydCB7dW5zaGlmdFNoaWZ0ZWRFbGVtZW50c31cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKXtcbiAgICBmbigpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVhZHkgZnJvbSBcIi4vcmVhZHkuanNcIjtcbmltcG9ydCB7dW5zaGlmdFNoaWZ0ZWRFbGVtZW50c30gZnJvbSBcIi4vaGVscGVycy5qc1wiO1xuXG5yZWFkeShmdW5jdGlvbigpe1xuICB1bnNoaWZ0U2hpZnRlZEVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NoaWZ0ZWQnKSk7XG5cbiAgLy8gdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIC8vIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJztcbiAgLy8gc3R5bGVFbGVtZW50LmlubmVySFRNTCA9ICcucm93IHsgZGlzcGxheTogdGFibGUtY2VsbDsgfSc7XG4gIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblxufSk7XG4iXX0=
