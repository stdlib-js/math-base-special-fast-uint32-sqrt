// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).sqrtUint32=n()}(this,(function(){"use strict";return function(e){var n,t,o,f;for(f=e>>>0,n=0,t=1073741824;t>f;)t>>>=2;for(;0!==t;)o=n+t>>>0,n>>>=1,e>=o&&(e-=o,n+=t),t>>>=2;return n>>>0}}));
//# sourceMappingURL=bundle.js.map
