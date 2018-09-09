window.linkOpener = window.linkOpener || {};
window.linkOpener.playScript = (function() {

    var controls = {
        click: function() {
            var link = controls.getVideoSourceLink();
            controls.openTabToLocation(link);
        },
        getVideoSourceLink: function() {

            var videoControl = document.getElementsByClassName('html5-video-player');

            if(!videoControl || videoControl.length < 1)
                return '';

            var link = videoControl[0].children[0].src;
            return link || '';
        },
        openTabToLocation: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    };

    controls.click();

})();