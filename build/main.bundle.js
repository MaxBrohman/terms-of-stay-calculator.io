!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputs=document.querySelector("#inputs-template").content.cloneNode(!0),this.inputs.querySelector(".add-previous-date-button").addEventListener("click",this.addPreviousDateHandler),t.previousDate||this.inputs.querySelector(".add-previous-date-button").remove(),this.inputs.querySelector(".add-date-button").addEventListener("click",this.addDateHandler),this.inputs.querySelector(".remove-date-button").addEventListener("click",this.removeDateHandler),t.removeDate||this.inputs.querySelector(".remove-date-button").remove(),this.inputs.querySelector(".app-interface__till-present").querySelector("input").addEventListener("change",this.tillPresentHandler),t.tillPresent||this.inputs.querySelector(".app-interface__till-present").remove()}var t,n,i;return t=e,i=[{key:"renderLastInputs",value:function(){return new this({previousDate:!1,removeDate:!0,tillPresent:!0})}},{key:"renderFirstInputs",value:function(){return new this({previousDate:!0,removeDate:!0,tillPresent:!1})}},{key:"renderOnlyInputs",value:function(){return new this({previousDate:!0,removeDate:!1,tillPresent:!0})}},{key:"renderInitialInputs",value:function(){return new this({previousDate:!1,removeDate:!1,tillPresent:!0})}},{key:"renderMiddleInputs",value:function(){return new this({previousDate:!1,removeDate:!0,tillPresent:!1})}}],(n=[{key:"render",value:function(){return this.inputs}},{key:"removeDateHandler",value:function(e){e.preventDefault(),inputsWrapper.nextElementSibling||inputsWrapper.previousElementSibling.appendChild(inputsWrapper.querySelector(".app-interface__till-present").cloneNode(!0)),this.inputs.remove()}},{key:"addDateHandler",value:function(t){t.preventDefault();var n=this.closest(".inputs-wrapper");if(n.nextElementSibling||n.previousElementSibling)document.querySelectorAll(".inputs-wrapper").length>1&&!document.querySelector(".inputs-wrapper").querySelector(".add-previous-date-button")&&document.querySelector(".inputs-wrapper").appendChild(this.previousDate.cloneNode(!0)),this.inputs.insertAdjacentElement("afterend",e.renderMiddleInputs());else{var r=n.querySelector('input[name="in-date"]').value,i=n.querySelector('input[name="out-date"]').value;n.after(e.renderLastInputs());var u=n.parentNode.replaceChild(e.renderFirstInputs(),n);console.log(u),u.querySelector('input[name="in-date"]').textContent=r,u.querySelector('input[name="out-date"]').textContent=i}}},{key:"addPreviousDateHandler",value:function(t){t.preventDefault(),this.inputs.insertAdjacentElement("beforebegin",e.renderFirstInputs()),this.previousDate.remove()}},{key:"tillPresentHandler",value:function(){this.addDate.disabled=!0}}])&&r(t.prototype,n),i&&r(t,i),e}();document.querySelector(".app-interface__terms-container").appendChild(i.renderInitialInputs())}]);
//# sourceMappingURL=main.bundle.js.map