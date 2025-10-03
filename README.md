# Bat Simulation JS

<div align="center">
  <img src="https://github.com/user-attachments/assets/42519624-d1d0-4bfb-b443-c70d5d8655f4" alt="My Image" width="300"/>
</div>
<div align="center">
  <a href="https://blubitz.github.io/batsim/">Demo</div>
</div>
<br>
<br>

__Looking for an easy way to add some spooky flair to your website for Halloween?__

With Halloween around the corner, it’s surprising there isn’t already a simple flying bat snippet for developers. That’s where `batsim.js` comes in — a configurable JS script that lets you add animated bats to your site and introduce just the right amount of seasonal disruption to your user experience.

## Installing

### CDN

```html
<!-- Include the batsim library -->
<script src="https://cdn.jsdelivr.net/gh/blubitz/batsim/batsim.min.js"></script>

<!-- Launch bats! Default settings -->
<script>
  batsim();
</script>
```

### Self Hosted

Download [batsim.js](https://cdn.jsdelivr.net/gh/blubitz/batsim/batsim.js) to your website.
```html
<!-- Include the batsim library -->
<script src="./batsim.js"></script>

<!-- Launch bats! Default settings -->
<script>
  batsim();
</script>

```


## Customization

### Default usage

```js
batsim();
```

### Changing bat image

```js
batsim({ imgsrc: 'https://example.com/bat.gif' });
```

### More bats

```js
batsim({ imgsrc: 'bat.gif', count: 25 });
```

Creates a swarm of 25 bats.


### Confined to an element

```js
const box = document.getElementById('bat-zone');
batsim({ imgsrc: 'bat.gif', count: 15, boundEl: box });
```

Bats will try to fly inside `#bat-zone`.


### Uniform bat sizes

```js
batsim({ imgsrc: 'bat.gif', count: 12, size: 64, random: false });
```

All bats are exactly `64px` wide.


### Faster bats

```js
batsim({ imgsrc: 'bat.gif', minSpeed: 400, maxSpeed: 600 });
```

Bats zoom across the screen quickly.


### Delay before starting

```js
batsim({ imgsrc: 'bat.gif', delay: 3000 });
```

Bats start appearing after **3 seconds**.


## Get Involved

Hey, I made this project for fun, feel free to play around with it and see what happens.

Got ideas or wanna chat about it? Drop me a message, I’d love to connect!

## Credits

Modified from [jsbat.js v1.2](https://www.delphitools.info/2013/10/30/pimp-your-website-with-an-halloween-bat/) by Eric Grange.

## Copyright

(c) 2025 blubitz
