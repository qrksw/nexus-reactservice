import React from 'react';
import Toolbar from './../components/Toolbar';
function Home() {
    function userLoggedIn() {
        const jwtToken = document.cookie.split("; ").find((row) => row.startsWith("access_token="))?.split("=")[1]

        // document.cookie.contain
    }

    return(
        <>
            <Toolbar />

            <div id="spacer-div" style={{height: "50px"}}></div>

            
            </>
    )
}

export default Home;