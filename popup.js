const cop = () => {
    chrome.tabs.executeScript(null, {
        file: 'foreground.js'
    });
}

document.getElementById('clickme').addEventListener('click', cop);
