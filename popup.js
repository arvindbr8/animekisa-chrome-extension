document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick() {
        // chrome.tabs.query({currentWindow: true, active: true},
        //     function(tabs) {
        //         chrome.tabs.sendMessage(tabs[0].id, 'hi')
        //     })
        let episode = 0;
        chrome.storage.sync.get(["naruto-shippuden-episode#"], function(items) {
            episode = items["naruto-shippuden-episode#"];
            window.open(`https://animekisa.tv/naruto-shippuden-dubbed-episode-${episode}`, '_blank');
        })
    }
})