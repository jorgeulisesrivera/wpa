import React, { useEffect,useState } from "react"
import {register,WpaContext} from '../wpa'


function MyApp({ Component, pageProps }) {
  
    //WPA:
    const [deferredPrompt,setDeferredPrompt] = useState(null);
    useEffect(() => {
        //console.log("WINDOW.addEventListener");
        //EVENT INSTALL PROMPT:
        /*window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            event.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(event);
        });*/

    }, []);


  return <WpaContext.Provider value={deferredPrompt}><Component {...pageProps} /></WpaContext.Provider>
}

export default MyApp