let intervalId = null;

//Links abaixo para você inserir as URLs que deseja navegar
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startRotation') {
        const urls = [
            "https://www.google.com",
            "https://www.youtube.com",
            "https://www.github.com"
        ];

        let tabIds = [];

        const openTabs = async () => {
            for (const url of urls) {
                const tab = await chrome.tabs.create({ url, active: false });
                tabIds.push(tab.id);
            }

            let currentIndex = 0;

            intervalId = setInterval(() => {
                if (tabIds.length > 0) {
                    chrome.tabs.update(tabIds[currentIndex], { active: true });
                    currentIndex = (currentIndex + 1) % tabIds.length;
                }
            }, 3000);
        };

        openTabs();
    }
});
