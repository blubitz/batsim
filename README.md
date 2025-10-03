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

### Default usage – just call it!

```javascript
batsim(); 
// ✅ Shows default bats
```

### Use a custom bat GIF

```javascript
batsim('https://example.com/bat.gif'); 
// ✅ Displays bats using your GIF
```

### Change the number of bats

```javascript
batsim('https://example.com/bat.gif', 10); 
// ✅ 10 bats will appear
```

### Restrict bats to a specific element

```javascript
batsim('https://example.com/bat.gif', 10, document.getElementById('myDiv')); 
// ✅ Bats stay inside #myDiv
```

### Resize bats

```javascript
batsim('https://example.com/bat.gif', 10, document.getElementById('myDiv'), 50); 
// ✅ Each bat is 50px
```

### Make all bats the same size (no randomness)

```javascript
batsim('https://example.com/bat.gif', 10, document.getElementById('myDiv'), 50, false); 
// ✅ Uniform bat sizes
```

## Get Involved

Hey, I made this project for fun, feel free to play around with it and see what happens.

Got ideas or wanna chat about it? Drop me a message, I’d love to connect!

## Credits

Modified from [jsbat.js v1.2](https://www.delphitools.info/2013/10/30/pimp-your-website-with-an-halloween-bat/) by Eric Grange.

## Copyright

(c) 2025 blubitz
