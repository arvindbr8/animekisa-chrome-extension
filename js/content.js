let startTime = new Date();
let episodeNo = window.location.href.split('-').pop()

let showNotification = function(message, nextEpisode) {

    bgColor = "#fcf8e3";
    txtColor =  "#c09853";
    height = 50;
    borderColor = '#fbeed5'
    /*create the notification bar div if it doesn't exist*/
    if ($('#notification-bar').length == 0) {
        var HTMLmessage = "<div class='notification-message' style='text-align:left; font-family:myriad; line-height: " + height + "px; padding:1px 20px;'>" + message + `<a style="line-height: ${height}px;" href="${window.location.href.replace(episodeNo, nextEpisode)}"> <b>Go to</b> </a> next canon` + "</div>";
        $('body').prepend("<div id='notification-bar' class='alert-warning' style='display:none; width:100%; height:" + height + "px; background-color: " + bgColor + "; position: fixed; z-index: 100; color: " + txtColor + "; border: 0 0 2px 0 " + borderColor + ";'>" + HTMLmessage + "</div>");
    }
    /*animate the bar*/
    $('#notification-bar').slideDown(function () {
        setTimeout(function () {
            $('#notification-bar').slideUp(function () { });
        }, 5000);
    });
}


let checkIfFiller = function() {
    /* Filler list as per anime fillers website */
    let fillerList = [28, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 144, 145, 146, 147, 148, 149, 150, 151, 170, 171, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 257, 258, 259, 260, 271, 279, 280, 281, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 376, 377, 389, 390, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 416, 422, 423, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 464, 465, 466, 467, 468, 469, 480, 481, 482, 483]


    if (fillerList.includes(parseInt(episodeNo))) {
        var nextEpisode = 0;
        for (var i = parseInt(episodeNo) + 1; i <= fillerList[fillerList.length-1]; i++) {
            console.log(i);
            if (!fillerList.includes(i)) {
                nextEpisode = i;
                break;
            }
        }
        console.log(nextEpisode);
        showNotificationBar("This episode is a Filler!", nextEpisode);

    }
}


checkIfFiller();
window.addEventListener('unload', async function () {
    let endTime = new Date();
    let timeElapsed = (endTime - startTime) / 60000 // time elapsed in minutes
    if (timeElapsed >= 15) {
        chrome.storage.sync.set({ "naruto-shippuden-episode#": episodeNo }, function () {
            console.log("AnimeKisa extension: Naruto episode is saved")
        });
    }
})