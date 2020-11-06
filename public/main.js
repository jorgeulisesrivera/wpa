
const register = () => {
    return new Promise((resolve, reject) => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').then(swRegistration=>{
                resolve(swRegistration);
            }).catch(err=>{
                reject(err);
            })
        }else{
            reject("ServiceWorkers are not supported by your browser!");
        }
    })
}

window.onload = () => {console.log("WINDOW.ONLOAD");
  'use strict';
  //REGISTER SW:
  register().then(swRegistration=>{
    console.log("SW Registrado!");
  })
  .catch(err=>{
    console.log("SW ERROR",err);
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  console.log("beforeinstallprompt");
});
