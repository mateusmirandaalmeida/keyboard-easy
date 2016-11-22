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
## Configure options
```
KeyboardEasy.setConfigurations({
    showNameKeyPressed : true, // Default: false - Informs the name of the key pressed
    ignoreCase: true, // Default: false - ignore case sensitive
    keepOrderPressed: true // Default: true - respect order of keys pressed
})

```
## Example
```
KeyboardEasy.watchKeys(['a', 'b'], function (evt, keys) {
  console.log('Last event:'+evt)
  console.log('Keys Pressed:'+keys)
});
```
## Installation of dependencies for use or development
```
npm install
```
## Tasks
Run the task 'gulp' for generating the minified file.
