# Slick for Meteor

Lightcase.js - Beautiful, flexible and responsive Lightbox Plugin to present various types of content famously.
[Demo](http://cornel.bopp-art.com/lightcase/#demo) - [Documentaion](http://cornel.bopp-art.com/lightcase/documentation/) - [API](http://cornel.bopp-art.com/lightcase/documentation/#api)

## Installing

```bash
    meteor add risul:lightcase
```

## Usage

Template:

```html
<template name="hello">
  <a href="path/to/media.jpg" data-rel="lightcase">Your link description or thumb</a>
</template>
```

On template rendered:

```js
Template.hello.rendered = function() {
  $('a[data-rel^=lightcase]').lightcase();
}
```


## Documentaion

For more info, please see [docs](http://cornel.bopp-art.com/lightcase/documentation/) or [API](http://cornel.bopp-art.com/lightcase/documentation/#api)