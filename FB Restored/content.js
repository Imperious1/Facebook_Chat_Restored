/*
 This source was made by Ryan Zachary/Imperious1/Silentshadow/s1l3ntshadowz

 This extension will bring back the "Turn off chat for..." & "Turn on chat for..." options
 in Facebook's Advanced chat settings, which was removed around late 2016.

 It is statically designed, so if Facebook's HTML class names change, this will cease to work until
 updated again, or possibly never if they permanently remove the code on the site.

 Made in response to https://www.f**eb**k.com/help/community/question/?id=1731281727189481
 and because I missed it too.



 PRIVACY POLICY - https://pastebin.com/6AbsnbcG
 640x400

 */

/**
 * Listens for Focus out events (i.e when the advanced
 * settings pop up comes up) and then runs this code
 */

document.addEventListener('focusout', function () {
    var whitelist = document.getElementsByClassName('whitelistSection');
    if (whitelist.length > 0) {
        whitelist[0].className = 'pbm whitelistSection unselected';
        document.getElementsByClassName('tokenizerArea')[0].className = 'tokenizerArea';
    }
});