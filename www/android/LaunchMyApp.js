var exec = require('cordova/exec');

module.exports = {
    checkURL: function(callback) {
        exec(
          function(url) {
            if (typeof handleOpenURL === "function") {
              handleOpenURL(url);
            }
            callback();
          },
          callback,
          "LaunchMyApp",
          "checkIntent",
          []
        );
    }
};