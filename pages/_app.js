import React, { useEffect,useState } from "react"
import {register,WpaContext} from '../wpa'


function MyApp({ Component, pageProps }) {
  
    //WPA:
    const [deferredPrompt,setDeferredPrompt] = useState(null);
    useEffect(() => {

        //REGISTRAR SW:
        register().then(swRegistration=>{
            console.log("SW Registrado.");
            //CAPTURAR PROMPT DE INSTALACION PARA USARLO MAS ADELANTE A NUESTRO FAVOR:
            window.addEventListener('beforeinstallprompt', (event) => {
                console.log("EVENT beforeinstallprompt.");
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                event.preventDefault();
                // Stash the event so it can be triggered later.
                //setDeferredPrompt(event);
            });
        })
        .catch(err=>{
            console.log("SW ERROR",err);
        });

    }, []);


  return <WpaContext.Provider value={deferredPrompt}><Component {...pageProps} /></WpaContext.Provider>
}

export default MyApp