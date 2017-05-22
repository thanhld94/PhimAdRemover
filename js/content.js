var script = document.createElement('script');

script.src = chrome.extension.getURL('js/adRemover.js');

(document.head || document.documentElement).appendChild(script);
