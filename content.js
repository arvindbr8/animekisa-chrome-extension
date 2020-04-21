let startTime = new Date();

chrome.storage.sync.get(["naruto-shippuden-episode#"], function(items) {
})

window.addEventListener('unload', async function(){
    let endTime = new Date();
    let timeElapsed = (endTime - startTime)/60000 // time elapsed in minutes
    if (timeElapsed >= 15) {
        let episodeNo = window.location.href.split('-').pop()
        chrome.storage.sync.set({ "naruto-shippuden-episode#": episodeNo }, function(){
            //  A data saved callback omg so fancy
            console.log("AnimeKisa extension: Naruto episode is saved")
        });
    }
})