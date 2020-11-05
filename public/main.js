
const publicVapidKey    = 'BGq040fkchG4qNS33DQQ-fw5VWOBizU40yQrQVGEDvqcmsojOYnPjYPlm6nwo2v14x1G3Hggku2Ep_LTprKLJWk';
const privateKey        = "oX_Jpk3kRhIKAeQEk4Sy6_Ak1exFGBXO-e00POsNCiQ";


const saveSubscription = async subscription => {console.log("enviando",JSON.stringify(subscription));
    // POST a nuestro servidor con la subscrición
    const res = await fetch("https://ii3642raag.execute-api.us-east-1.amazonaws.com/development/webpush", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription)
    });
    console.log("RES",res);
    return res.status === 200 ? res.json() : false;
};

const generateSubscription = async swRegistration => {
    await window.Notification.requestPermission();
    // Comprobamos si ya existía una subscripción previa y guardada
    const pushSubscription = await swRegistration.pushManager.getSubscription();
    if (!pushSubscription) {
      const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
      }); 
      // Envíamos la subscripción al servidor
      const saved = await saveSubscription(subscription);
      if (saved) return saved;
      throw Error('Subscription not saved!');
    } else {
        console.log(pushSubscription);const saved = await saveSubscription(pushSubscription);
        return pushSubscription;
    }
};

const registerServiceWorker = async () => {
    // Registro del Service Worker
    return await navigator.serviceWorker.register('./sw.js');
};

const register = async () => {
    if ('serviceWorker' in navigator) {
      const swRegistration = await registerServiceWorker();
      // Pasamos el ServiceWorkerRegistration
      await generateSubscription(swRegistration);
    } else throw new Error('ServiceWorkers are not supported by your browser!');
};

// Función que convierte nuestra clave pública a Uint8Array
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i += 1) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
      //navigator.serviceWorker.register('./sw.js');
      register();
    }
}
  