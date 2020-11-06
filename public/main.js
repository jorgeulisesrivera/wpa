
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

//REGISTER SW:
register().then(swRegistration=>{
  console.log("SW Registrado!");
})
.catch(err=>{
  console.log("SW ERROR",err);
});