# ASSETS

* This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.


## App
Global Settings, Fonts, and Config -- HTML Tag Styling


## Columns
Column Layouts
* XL: 1400px
* LG: 1280px
* MD: 1028px
* SM: 768px
* XS: 560px

```html
<div class="col-1-4"></div>

<div class="max-1-1 xl-1-1 lg-1-2 md-1-2 sm-1-3 xs-1-3"></div>

<div class="hide-at-xl"></div>

<div class="show-at-lg"></div>

<div class="hide-on-sm"></div>

<div class="show-on-xs"></div>
```


## Mixins
Useful Tools for Styling and Layouts

```
@include flex(row,nowrap,center,flex-start);


@include position(absolute, 0, null, null, 0);
```


## Vars
Global Variables and Settings across the Application


## Documentation
* [Nuxt.js - Assets : Webpacked](https://nuxtjs.org/guide/assets#webpacked)
