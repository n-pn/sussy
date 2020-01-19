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
// colors: gray, red, orange, yellow, green, teal, blue, indigo, purple, pink
// tones: 1, 2, 3, 4, 5, 6, 7, 8, 9;

$-color-pallete: (gray: (...), red: (...), ...);

$-color-mapping: (
    neutral: gray,
    primary: blue,
    success: green,
    warning: orange,
    harmful: red,
) !default;

@function color($name, $tone: 5) { }
```

#### position sides

<!-- prettier-ignore -->
```scss
$-side-edges: top, bottom, left, right;
$-side-flanks: top-bottom, left-right;
$-side-corners: top-left, top-right, bottom-left, bottom-right;

$-side-abbrs: (
    top: t,
    bottom: b,
    left: l,
    right: r,
    top-left: tl,
    top-right: tr,
    top-bottom: tb,
    bottom-left: bl,
    bottom-right: br,
    left-right: lr,
);

@function side-abbr($side) {} // t => top, lr => left-right, etc.
@function side-match($side1, $side2) {} // top ~= top-left, top-right, top-bottom...
```

#### media queries

<!-- prettier-ignore -->
```scss

$-screen-xs: 320px !default;
$-screen-sm: 560px !default;
$-screen-md: 800px !default;
$-screen-lg: 1040px !default;
$-screen-xl: 1280px !default;

$-screen-sizes: (
    xs: $-screen-xs,
    sm: $-screen-sm,
    md: $-screen-md,
    lg: $-screen-lg,
    xl: $-screen-xl,
) !default;

$-screen-names: map-keys($-screen-sizes);

@function screen-size($name) {} // $name can also be a custom number

@mixin screen-min($min: sm) {} // media screen + min-width
@mixin screen-max($max: lg) {}// media screen + max-width
@mixin screen-range($min, $max) {}
@mixin screen-height-min($min: sm) {} // media screen + min-height
@mixin screen-height-max($max: lg) {} // media screen + max-height
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

// $name in (none, white, black, primary, neutral, success, warning, harmful)
// $tone in (1..9)
.__bg-#{$name}-#{$tone} {}
```

#### border-radiuses

<!-- prettier-ignore -->
```scss
// configs
$-raduius-sides: top, left, bottom, right, top-left, top-right, bottom-left, bottom-right !default;
$-radius-sizes: 0, 1px, 2px, 3px, 4px, 6px, 8px, x !default;
$-radius-size-df: 4px !default;

// helpers
@mixin border-radius($side: all, $radius: $-radius-size-df) {}

// classes
.__r-#{$side} { @include border-radius($side); }
.__r-#{$side}-#{$radius} { @include border-radius($side, $radius); }
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
