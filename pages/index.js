import React from 'react'

const Home = ()=>{
    return(<div>
        new shop 3


        <button onClick={()=>{


            console.log('👍', 'butInstall-clicked');
            const promptEvent = global.deferredPrompt;
            if (!promptEvent) {
                // The deferred prompt isn't available.
                return;
            }
            // Show the install prompt.
            promptEvent.prompt();
            // Log the result
            promptEvent.userChoice.then((result) => {
                console.log('👍', 'userChoice', result);
                // Reset the deferred prompt variable, since
                // prompt() can only be called once.
                global.deferredPrompt = null;
                // Hide the install button.
                divInstall.classList.toggle('hidden', true);
            });



        }}>INSTALAR APP</button>



    </div>)
}

export default Home;