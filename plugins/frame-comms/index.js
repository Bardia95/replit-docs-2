function frameComms(context, opts) {
  return {
    name: 'replit-frame-comms',
    injectHtmlTags() {
      return {
        preBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              !(function () {
                let lastUrl = location.href;
                function onUrlChange() {
                  this.window.top.postMessage(location.href, "*");
                }
                new MutationObserver(() => {
                  const url = location.href;
                  if (url !== lastUrl) {
                    lastUrl = url;
                    onUrlChange();
                  }
                }).observe(document, {subtree: true, childList: true});
              })();`
          }
        ]
      }
    },
  }
}

module.exports = frameComms;