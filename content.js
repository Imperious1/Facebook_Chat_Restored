/*
 This source was made by Ryan Zachary/Imperious1/Silentshadow/s1l3ntshadowz

 This extension/script will bring back the "Turn on/off chat for all contacts except" options
 in Facebook's Advanced chat settings, which was removed around late 2016.

 Made in response to https://www.facebook.com/help/community/question/?id=1731281727189481
 and because I missed it too.
 */

var runNecessary = true;
//var firstRun = true;

/*
function setListeners() {
    document.getElementsByClassName('_42fu')[0].onclick = function () {
        runNecessary = true;
    };
    document.getElementsByClassName('_42fu')[1].onclick = function () {
        runNecessary = true;
    };
}*/


/**
 * Listens for Focus out events (i.e when the advanced
 * settings pop up comes up) and then runs this code
 *
 * Changes the class names to their defaults except
 * it removes "hidden_elem", which makes the options
 * visible again.
 */
document.addEventListener('focusout', function () {
    var whitelist = document.getElementsByClassName('whitelistSection');
    var blacklist = document.getElementsByClassName('blacklistSection');

    if (whitelist.length > 0 && runNecessary) {
        whitelist[0].className = 'pbm whitelistSection unselected';
        document.getElementsByClassName('tokenizerArea')[0].className = 'tokenizerArea';

        whitelist[0].onclick = function () {
            blacklist[0].className = 'pbm blacklistSection unselected';
            whitelist[0].className = 'pbm whitelistSection selected';
        };
        blacklist[0].onclick = function () {
            whitelist[0].className = 'pbm whitelistSection unselected';
            blacklist[0].className = 'pbm blacklistSection selected';
        };
        runNecessary = false;
        /*if (firstRun)
            setListeners();

        firstRun = false;*/
    }
});
