import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Toolbar from './../components/Toolbar';
// import UserInfo from './../components/UserInfo';

function UserProfile(props) {
    const params = useParams()

    const jwtToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("refresh_token="))
    ?.split("=")[1];

    // const [isValidProfile, setValidProfile] = useState()

    fetch('http://localhost:6001/api/v1/access', {
        headers: {
            'Authorization': "Bearer " + jwtToken,
            'Content-Type': 'application/json'
        },
        }).then(response => response.json().then(
            (data) => {
                document.cookie = "access_token=" + data.jwtToken
            }
        ))
    
    return(
        <>
            <Toolbar />
            
            {/* <div id="spacer-div" style={{height: "50px"}}></div> */}

            {/* <div id="user-info-div" style={{float:"left", display:"inline", width: "30%"}}>
            {isValidProfile ? <UserInfo postId={props.postId} /> : <></>}
            </div> */}
 
            {/* <div id="nonexistent-user-div" className="request-div" hidden="true">
                <p id="nonexistent-user-text-field"></p>
            </div> */}
        </>
    )
}

export default UserProfile;