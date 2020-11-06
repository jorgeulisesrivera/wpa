
const register = () => {
    return new Promise((resolve, reject) => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('https://master.du9rif2rdddi3.amplifyapp.com/sw.js').then(swRegistration=>{
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