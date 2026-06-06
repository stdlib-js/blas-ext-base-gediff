<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gediff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the differences between consecutive elements of a strided array.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-gediff
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var gediff = require( '@stdlib/blas-ext-base-gediff' );
```

<!-- lint disable maximum-heading-length -->

#### gediff( N, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut )

<!-- lint enable maximum-heading-length -->

Calculates the differences between consecutive elements of a strided array.

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
// out => [ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input array.
-   **strideX**: stride length for `x`.
-   **N1**: number of indexed elements to prepend.
-   **prepend**: array containing values to prepend after computing differences.
-   **strideP**: stride length for `prepend`.
-   **N2**: number of indexed elements to append.
-   **append**: array containing values to append after computing differences.
-   **strideA**: stride length for `append`.
-   **out**: output array. Must have `N + N1 + N2 - 1` indexed elements.
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute differences of every other element:

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0 ];

gediff( 3, x, 2, 1, p, 1, 1, a, 1, out, 1 );
// out => [ 1.0, 4.0, 4.0, 11.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array...
var x0 = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

gediff( x1.length, x1, 1, 1, p, 1, 1, a, 1, out, 1 );
// out => [ 1.0, 2.0, 2.0, 2.0, 11.0 ]
```

<!-- lint disable maximum-heading-length -->

#### gediff.ndarray( N, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Calculates the differences between consecutive elements of a strided array using alternative indexing semantics.

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
// out => [ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetP**: starting index for `prepend`.
-   **offsetA**: starting index for `append`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

```javascript
var x = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];
var p = [ 1.0 ];
var a = [ 11.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0 ];

gediff.ndarray( 3, x, 1, x.length-3, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
// out => [ 1.0, 2.0, 2.0, 11.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N + N1 + N2 <= 1`, both functions return the output array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var zeros = require( '@stdlib/array-zeros' );
var gediff = require( '@stdlib/blas-ext-base-gediff' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Input array:', x );

var p = discreteUniform( 2, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Prepend array:', p );

var a = discreteUniform( 2, -100, 100, {
    'dtype': 'generic'
});
console.log( 'Append array:', a );

var out = zeros( 13, 'generic' );

gediff( x.length, x, 1, p.length, p, 1, a.length, a, 1, out, 1 );
console.log( 'Output:', out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gediff.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gediff

[test-image]: https://github.com/stdlib-js/blas-ext-base-gediff/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gediff/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gediff/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gediff?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gediff.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gediff/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gediff/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gediff/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gediff/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gediff/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gediff/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gediff/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gediff/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gediff/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
