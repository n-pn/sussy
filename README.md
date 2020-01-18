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
// color with no tone: none, white, black,
// color with tones: gray, red, orange, yellow, green, teal, blue, indigo, purple, pink
// color tones: 1, 2, 3, 4, 5, 6, 7, 8, 9;

$-color-pallete: (none, white, black, gray: (...), red: (...), ...);

$-color-mapping: (
    neutral: gray,
    primary: blue,
    success: green,
    warning: orange,
    harmful: red,
) !default;

@function color($name, $tone: 5) { }
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

@mixin screen-min($min: ts) {} // media screen + min-width
@mixin screen-width-max($max: cs) {}// media screen + max-width
@mixin screen-width-range($min, $max) {}
@mixin screen-height-min($min: ts) {} // media screen + min-height
@mixin screen-height-max($max: cs) {} // media screen + max-height
@mixin screen-height-range($min, $max) {}
// NOTE: $min, $max == null meaning @content without media query
```

### Commons

Define common patterns and utilities classes

#### background-colors

<!-- prettier-ignore -->
```scss
$-bgc-name-df: neutral !default;
$-bgc-tone-df: 2 !default;

@mixin bgcolor($name: $-bgc-name-df, $tone: $bgc-tone-df) {}

// $name in (none, white, black, $-color-names)
// $tone in (1..9), only apply on $-color-names
.__bgc-#{$name} {}
.__bgc-#{$name}-#{$tone} {}
```

#### border-radiuses

<!-- prettier-ignore -->
```scss
// configs
$-raduius-sides: top, left, bottom, right, top-left, top-right, bottom-left, bottom-right !default;
$-radius-sizes: 0, 1, 2, 4, 6, 8, 10, 12, 16, 24, 32 !default;
$-radius-size-df: 4 !default;

// helpers
@mixin border-radius($side: all, $radius: $-radius-size-df) {}

// classes
.__bdr { @include border-radius(); }
.__bdr-#{$side} { @include border-radius($side); }
.__bdr-#{$side}-#{$radius} { @include border-radius($side, $radius); }
```

#### borders

<!-- prettier-ignore -->
```scss
// configs
$-border-sides: top, left, bottom, right, top-bottom, left-right !default;
$-border-widths: 0, 1px, 2px, 3px, 4px !default;
$-border-styles: ( none: n, inset: i, hidden: h, solid: s,
                   double: db, dotted: dt, dashed: ds, ) !default;
$-border-width-df: 1px !default;
$-border-style-df: solid !default;
$-border-color-df: color(neutral, 7) !default;

// helpers
@mixin border-color($side: all, $color: $-border-color-df) {}
@mixin border($side: all, $width: 1px, $color: gray, $style: solid) {}

// classes
.__bd-#{$side} { @include border($side); }
.__bd-#{$width} { @include border($width); }
.__bd-#{$side}-#{$width} { @include border($width, $side); }
.__bds-#{$side} { @include border-style($side, solid); }
.__bds-#{$side}-#{$style} { @include border-style($side, $style); }
```

#### margins

<!-- prettier-ignore -->
```scss
// configs
$-margin-sizes: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 58, 64 !default;
$-margin-locs: a, t, b, l, r, tb, lr !default;


// helpers
@mixin border($loc: x, $width: $-border-width-df) {}

// classes
.__bd-#{$loc} { @include border($loc); }
.__bd-#{$width} { @include border($width); }
.__bd-#{$width}-#{$loc} { @include border($width, $loc); }
```
