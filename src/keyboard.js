(function () {
    var vm = window, doc = document, keysPressed = {}, buttons = [], configuration;

    function init() {
        vm.KeyboardEasy = {};
        configuration = {
            showNameKeyPressed: false,
            ignoreCase: false,
            keepOrderPressed: true
        };
    }

    init();

    doc.onkeydown = function (evt) {
        if (!keysPressed[evt.keyCode]) {
            keysPressed[evt.keyCode] = {code: evt.keyCode, label: evt.key, order: Object.keys(keysPressed).length};
        }
        if (configuration.showNameKeyPressed) {
            console.info("KeyboardEasy -> Name Key Pressed: " + evt.key);
        }
        getKeysPressed(evt);
    }

    doc.onkeyup = function (evt) {
        delete keysPressed[evt.keyCode];
        getKeysPressed(evt);
    }

    function compare(a, b) {
        if (keysPressed[a].order < keysPressed[b].order)
            return -1;
        if (keysPressed[a].order > keysPressed[b].order)
            return 1;
        return 0;
    }

    vm.KeyboardEasy.setConfigurations = function (configurations) {
        Object.keys(configurations).forEach(function (key) {
          if(configuration.hasOwnProperty(key)){
              configuration[key] = configurations[key];
          }
        });
    }

    function getKeysPressed(evt) {
        var keys = "";
        var objectKeys = Object.keys(keysPressed);
        if(configuration.keepOrderPressed){
          objectKeys.sort(compare);
        }
        objectKeys.forEach(function (key) {
            keys += keysPressed[key].label;
        });
        buttons.forEach(function (buttonAction) {
            var characters = "";
            buttonAction.buttons.forEach(function (character) {
                characters += character;
            });
            if(configuration.ignoreCase) {
                keys = keys.toLowerCase();
                characters = characters.toLowerCase();
            }
            if (keys === characters && !buttonAction.executedReturn) {
                buttonAction.callBack(evt, buttonAction.buttons);
            }
            buttonAction.executedReturn = (keys === characters) ? true : false;
        })
    }

    vm.KeyboardEasy.watchKeys = function (button, callBack) {
        buttons.push({buttons: button, callBack: callBack, executedReturn: false});
    }


})();
