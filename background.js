// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if (/^https:\/\/nyaa\.si/.test(current_tab_info.url)) {
//             chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('injected'));
//         }
//     });
// });
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'reload') {
        chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('injected'));
    }
});