"use strict";

import ready from "./ready.js";
import {unshiftShiftedElements} from "./helpers.js";

ready(function(){
  unshiftShiftedElements(document.getElementsByClassName('shifted'));

  // var styleElement = document.createElement('style');
  // styleElement.type = 'text/css';
  // styleElement.innerHTML = '.row { display: table-cell; }';
  // document.head.appendChild(styleElement);

});
