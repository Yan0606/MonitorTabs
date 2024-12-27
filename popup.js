document.getElementById('play-button').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startRotation' });
  });
  