# Molds

Utility-based css framework in scss

## Cheatsheet

### Basis

#### base units

<!-- prettier-ignore -->
```scss
$-base-size: 16px !default;
$-base-cell: 0.25rem !default;

@function em($size, $base: 16) { @return $size / $base * 1em; }
@function rem($size) {  @return $size / $-base-size * 1rem; }
@function dot($size: 1) {  @return $size * $-base-cell; }
@function size($size: 1) { @return if(unitless($size), dot($size), $size); }
```

#### color pallete

<!-- prettier-ignore -->
```scss
$-color-names: gray, red, orange, yellow, green, teal, blue, indigo, purple,
    pink;
$-color-tones: 1, 2, 3, 4, 5, 6, 7, 8, 9;

$-color-aliases: (
    neutral: gray,
    primary: blue,
    success: green,
    warning: orange,
    harmful: red,
) !default;

@function color($name, $tone: 5) { } // $name == none => transparent
```

#### location util

<!-- prettier-ignore -->
```scss
$-loc-edges: t, b, l, r;
$-loc-sides: tb, lr;
$-loc-corners: tl, tr, bl, br;

@function loc-full($loc) {} // t => top, lr => left-right, etc.
@function loc-akin($loc1, $loc2) {} // top ~= top-left, top-right, top-bottom...
```

#### media queries

<!-- prettier-ignore -->
```scss
$-screen-1: 320px !default; // small phone
$-screen-2: 360px !default; // medium phone
$-screen-3: 480px !default; // large phone
$-screen-4: 640px !default; // small tablet
$-screen-5: 768px !default; // medium tablet
$-screen-6: 960px !default; // large tablet
$-screen-7: 1200px !default; // small computer monitor
$-screen-8: 1500px !default; // medium computer monitor
$-screen-9: 1800px !default; // large computer monitor

$-screen-names: ps, pm, pl, ts, tm, tl, cs, cm, cl;

@function screen-size($name) {} // $name can also be a custom number

@mixin screen-width-min($min: ts) {} // media screen + min-width
@mixin screen-width-max($max: cs) {}// media screen + max-width
@mixin screen-width-range($min, $max) {}
@mixin screen-height-min($min: ts) {} // media screen + min-height
@mixin screen-height-max($max: cs) {} // media screen + max-height
@mixin screen-height-range($min, $max) {}
// NOTE: $min, $max == null meaning bare @content
```

### Commons

Define common patterns and utilities classes

#### boder-radius

<!-- prettier-ignore -->
```scss
// configs
$-radius-locs: t, l, b, r, tl, tr, bl, br;
$-radius-sizes: 0, 1, 2, 4, 6, 8, 10, 12, 16, 24, 32 !default;
$-radius-size-df: 4 !default;

// helpers
@function radius-size($size: $-radius-size-df) {}
@mixin border-radius($loc: x, $size: $-radius-size-df) // `x` mean all 4 corners

// classes
.__bdr {}
.__bdr-#{$loc} {}
.__bdr-#{$loc}-#{$size} {}
```
