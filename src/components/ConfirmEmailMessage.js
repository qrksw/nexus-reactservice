import React from "react";
import "./css/UserRegisterForm.css";

export default class ConfirmEmailMessage extends React.Component {
    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get("token")
        await fetch('http://localhost:6005/email/enableUser?token=' + token, {
            method: 'GET',
            }).then(response => response.json().then(
                (data) => {
                    var messageDiv = document.getElementById('message-div')

                    //Show user a message that a verification email has been sent to their account
                    document.getElementById('request-success-text-field').innerHTML = data.message

                    //Move the message-div to the center of the screen once the width and height have been rendered
                    messageDiv.style.marginTop = "-" + messageDiv.offsetHeight / 2 + "px"
                    messageDiv.style.marginLeft = "-" + messageDiv.offsetWidth / 2 + "px"
                }
            ))
    }

    render() {
        return(
            <>
                <div id="message-div" className="request-div">
                    <p id="request-success-text-field"></p>
                </div>
            </>
        )
    }
}