<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Square Root

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute an integer [square root][square-root].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import sqrtUint32 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-uint32-sqrt@deno/mod.js';
```

#### sqrtUint32( x )

Returns an **approximate** [square root][square-root] of an unsigned 32-bit integer `x`.

```javascript
var v = sqrtUint32( 9 >>> 0 );
// returns 3

v = sqrtUint32( 2 >>> 0 );
// returns 1

v = sqrtUint32( 3 >>> 0 );
// returns 1

v = sqrtUint32( 0 >>> 0 );
// returns 0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Prefer hardware `sqrt` over a software implementation.
-   When using a software `sqrt`, this implementation provides a performance boost when an application requires only **approximate** computations for integer arguments.
-   For applications requiring high-precision, this implementation is **never** suitable.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import sqrtUint32 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-uint32-sqrt@deno/mod.js';

var v;
var i;

for ( i = 0; i < 101; i++ ) {
    v = sqrtUint32( i >>> 0 );
    console.log( 'sqrt(%d) ≈ %d', i, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/sqrt`][@stdlib/math/base/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast-uint32-sqrt.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast-uint32-sqrt

[test-image]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast-uint32-sqrt/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast-uint32-sqrt?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast-uint32-sqrt.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast-uint32-sqrt/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-uint32-sqrt/main/LICENSE

[square-root]: https://en.wikipedia.org/wiki/Square_root

<!-- <related-links> -->

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
