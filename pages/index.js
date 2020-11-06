import React,{useEffect,useContext} from 'react'
import {WpaContext} from '../wpa'

const Home = ()=>{

    let _WpaContext = useContext(WpaContext);

    return(<div>
        new shop 8

        {_WpaContext !== null &&<button onClick={()=>{

            let promptEvent = _WpaContext;
            promptEvent.prompt();
            // Wait for the user to respond to the prompt
            promptEvent.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                promptEvent = null;
            });

        }}>Add to home screen</button>}

    </div>)
}

export default Home;