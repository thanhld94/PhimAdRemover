var script = document.createElement('script');

script.src = chrome.extension.getURL('js/adRemover.js');
script.onLoad = function() {
  console.log("here");
};

(document.head || document.documentElement).appendChild(script);
