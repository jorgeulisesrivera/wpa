import { useEffect } from "react"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  useEffect(() => {
     
    window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);
        // Stash the event so it can be triggered later.
        global.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle('hidden', false);
    });

  }, [])

  return <Component {...pageProps} />
}

export default MyApp