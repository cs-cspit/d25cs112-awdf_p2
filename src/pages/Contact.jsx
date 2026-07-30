import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [message, setMessage] = useState("");

    const [showHelp, setShowHelp] = useState(false);

    return(

        <div className="contact">

            <h1>Contact Me</h1>

            <input

                type="text"

                placeholder="Enter your message"

                value={message}

                onChange={(e)=>setMessage(e.target.value)}

            />

            <p>

                Your Message:

                <strong> {message}</strong>

            </p>

            <p>

                Character Count : {message.length}

            </p>

            <button

                onClick={()=>setShowHelp(!showHelp)}

            >

                {showHelp ? "Hide Help" : "Show Help"}

            </button>

            {

                showHelp &&

                <div className="help">

                    Please enter your message above.

                </div>

            }

        </div>

    )

}

export default Contact;