# Keyboard Easy

Is a library for capturing keystrokes

## Installation
```
bower install keyboard-easy --save
```

## Add dependencies to the <head> section of your main html:
```
<script src="bower_components/keyboard-easy/dist/keyboard.min.js"></script>
```
## Basic usage
```
KeyboardEasy.watchKeys(['KeyName', 'KeyName'], function (evt) {
  console.log('Keys Pressed!!!', evt);
});
```
## Example
```
KeyboardEasy.watchKeys(['a', 'b'], function (evt) {
  console.log('Keys: a, b pressed!!!');
});

KeyboardEasy.watchKeys(['b', 'a'], function (evt) {
  console.log('Keys: b, a pressed!!!');
});
```
## Configure options
```
KeyboardEasy.setConfigurations({
    showNameKeyPressed : true // Informs the name of the key pressed
})

```

## Installation of dependencies for use or development
```
npm install
```

## Tasks
Run the task 'gulp' for generating the minified file.
