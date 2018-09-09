window.linkOpener = window.linkOpener || {};

window.linkOpener.extensionControl = (function() {

    var vars = {
        currentTab: undefined
    };

    var setupControls = {
        setup: function(info) {
            vars.currentTab = info;
            setupControls.setupButtonListener();
        },

        setupButtonListener: function() {
            document.getElementById("openButton").addEventListener("click", setupControls.injectOpenTabScript);
        },

        injectOpenTabScript: function() {
            chrome.tabs.executeScript(vars.currentTab.id, {file: "openTabscript.js"});
        },

        setupEventListener: function() {
            window.addEventListener('DOMContentLoaded', function () {

                if(chrome.tabs){
                    chrome.tabs.query({
                        active: true,
                        currentWindow: true
                      }, function (tabs) {
                          debugger;
                          setupControls.setup(tabs[0]);
                      });
                }
                else{
                    setupControls.setup();
                    return;
                }

            });
        }
    };

    setupControls.setupEventListener();
})();