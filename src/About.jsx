
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./about.css";

function About() {

    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".about-card > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section className="about-section" ref={container}>

            <div className="about-card">

                <p className="about-label">GET TO KNOW ME</p>

                <h1>About <span>Me</span></h1>

                <div className="about-content">

                    <h2>Hi, I'm Leena Thakur!</h2>

                    <p>
                        I'm a Software Development student.
                        I enjoy learning new technologies,
                        solving problems and building
                        interactive web experiences .
                    </p>

                    <p>
                        I have been exploring HTML, CSS,
                        JavaScript, React , GSAP and backend technologies.
                        I just try to build projects to solve real-world problems for benefit of humanity.
                    </p>

                    <p>
                        My goal is to become a skilled
                        software developer. Not just memorzing syntax building real-world application. 


                    </p>

                </div>

                <div className="about-details">

                    <div className="detail-box">
                        <h3>Education</h3>
                        <p> Bachelor's Degree(software Development) </p>
                    </div>

                    <div className="detail-box">
                        <h3>Interests</h3>
                        <p>Web Development · Exploring Technologies</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
