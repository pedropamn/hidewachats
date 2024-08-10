// ==UserScript==
// @name         Hide WhatsApp Web Conversations
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Hide WhatsApp conversations panel on WhatsApp Web
// @author       Pedro Neto
// @match        https://web.whatsapp.com/
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://web.whatsapp.com/&size=128
// @grant        none
// @require https://code.jquery.com/jquery-3.6.4.min.js
// @website https://github.com/pedropamn/WhatsAppWebChatsHider
// @updateURL https://github.com/pedropamn/WhatsAppWebChatsHider/raw/main/Hide%20WhatsApp%20Web%20Conversations.user.js
// @downloadURL https://github.com/pedropamn/WhatsAppWebChatsHider/raw/main/Hide%20WhatsApp%20Web%20Conversations.user.js
// ==/UserScript==

(function() {
    'use strict';


    //Wait the pane side became visible (page loaded)
    var interval = setInterval(function(){
        var panel = $('#side').is(":visible");

        //When visible, insert the icon
        if(panel){
            var html = '<div class="hide_conversations" style="cursor:pointer;"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">' +
    '<g transform="translate(0,512) scale(0.1,-0.1)" fill="#000000" stroke="none">' +
    '<path d="M4260 4470 c-14 -6 -147 -133 -297 -282 l-271 -271 -129 50 c-208 83 -406 135 -638 170 -184 27 -571 24 -764 -6 -509 -78 -959 -281 -1385 -624 -135 -108 -391 -366 -500 -502 -118 -149 -264 -368 -272 -410 -11 -60 4 -100 86 -223 240 -363 584 -709 930 -937 58 -38 107 -70 109 -72 3 -2 -104 -113 -236 -246 -207 -207 -242 -247 -248 -280 -11 -60 3 -107 44 -148 41 -41 88 -55 148 -44 34 6 227 196 1831 1798 1317 1317 1795 1801 1803 1826 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z m-1360 -655 c172 -26 363 -76 514 -135 l30 -11 -164 -164 -164 -164 -27 19 c-52 38 -215 110 -294 132 -106 28 -344 31 -449 5 -183 -46 -328 -128 -462 -261 -133 -134 -215 -280 -261 -462 -27 -108 -24 -334 5 -444 23 -83 89 -234 131 -295 l20 -31 -203 -203 -203 -203 -95 59 c-332 209 -669 527 -878 829 l-51 74 50 73 c177 256 485 564 746 748 352 248 768 405 1181 448 124 13 448 5 574 -14z m-198 -634 c62 -16 178 -64 178 -74 0 -1 -195 -197 -434 -436 l-434 -434 -27 52 c-36 73 -65 191 -65 270 1 409 394 721 782 622z"></path>' +
    '<path d="M4137 3462 c-59 -59 -107 -112 -106 -117 0 -6 39 -40 87 -77 205 -157 475 -445 621 -660 l32 -48 -41 -60 c-172 -254 -471 -557 -735 -746 -452 -324 -980 -489 -1505 -470 -164 5 -215 11 -383 42 l-89 17 -129 -129 c-93 -93 -125 -130 -115 -136 28 -16 265 -69 401 -90 187 -29 568 -31 750 -5 645 95 1183 373 1675 866 176 177 291 316 420 509 129 192 129 209 12 388 -112 170 -265 357 -427 520 -137 138 -328 304 -349 304 -6 0 -60 -48 -119 -108z"></path>' +
    '<path d="M3336 2661 l-138 -138 -13 -79 c-16 -92 -73 -214 -134 -287 -94 -113 -238 -198 -375 -222 l-79 -13 -141 -141 c-77 -77 -137 -143 -134 -146 12 -12 165 -34 239 -35 253 -1 486 98 674 285 193 193 278 396 279 665 1 125 -16 250 -32 250 -4 0 -69 -62 -146 -139z"></path>' +
    '</g>' +
    '</svg></div>';

            $('._ajv2').last().append(html);


            //Starts hided
            $('#pane-side').hide();

            //Exit loop
            clearInterval(interval);
        }
    },500)



    //Handle click to the icon
    $('body').on('click', '.hide_conversations', function() {

        //Check state of panel to hide or show
        if($('#pane-side').is(":visible") == true){
            $('#pane-side').hide();
        }
        else{
            $('#pane-side').show();
        }
    })



})();
