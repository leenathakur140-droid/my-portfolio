
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./contact.css";
function Contact() {
    const container = useRef(null);
    useGSAP(() => {

        gsap.from(".contact-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(".contact-info > *, .contact-form > *", {
            y: 25,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3
        });

    }, { scope: container });

    return (

        <section className="contact-section" ref={container}>

            <div className="contact-card">

        

                <div className="contact-info">

                    <p className="contact-label">
                        GET IN TOUCH
                    </p>

                    <h1>
                        Let's <span>Connect!</span>
                    </h1>

                    <p className="contact-description">
                        Have an idea or want to work together?
                        Feel free to contact me.
                        Let's create something amazing!
                    </p>

                    <div className="contact-details">

                        <div className="contact-item">
                            <span>✉</span>
                            <div>
                                <h3>Email</h3>
                                <p>leenathakur140@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span>⌘</span>
                            <div>
                                <h3>GitHub</h3>
                                <a href="https://github.com/leenathakur140-droid"
                                   target="_blank"
                                   rel="noreferrer">
                                    Visit Profile
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span>in</span>
                            <div>
                                <h3>LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/leena-thakur-870a293a8"
                                   target="_blank"
                                   rel="noreferrer">
                                    Visit Profile
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

    

                <form
                    className="contact-form"
                    onSubmit={(e) => {
                    
                    }}
                >

                    <h2>Send Me a Message</h2>

                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                    />

                    <label>Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label>Subject</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                    />

                    <label>Message</label>
                    <textarea
                        rows="4"
                        placeholder="Write your message..."
                        required
                    />

            <input  style={{backgroundColor:"purple" ,color:"white"}} type="submit"/>
                </form>

            </div>

        </section>
    );
}

export default Contact;
