
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./home.css";

function Home() {

    const container = useRef(null);

    useGSAP(() => {

        gsap.from(".homecontent >*", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });

        gsap.from(".hero-visual", {
            scale: 0.7,
            opacity: 0,
            duration: 1.2,
            delay: 0.4,
            ease: "power2.out"
        });

    }, { scope: container });

    return (
        <section className="home" ref={container}>

            <div className="homecontent">

                <p className="hero-intro">
                    HELLO, I'M
                </p>

                <h1>
                    Leena <span>Thakur</span>
                </h1>

                <h2>
                    Frontend Developer
                </h2>

                <p className="description">
                    I enjoy learning new technologies,
                    creating interactive websites and
                    building projects that make an impact.
                </p>

                <div className="homebuttons">

                    <a href="/about" className=" btn btn1">
                        get to know me
                    </a>

                    <Link to="/contact" className=" btn btn2">
                        Contact Me
                    </Link>

                </div>

                <p className="skills">
                    HTML · CSS · JavaScript · React · GSAP
                </p>

            </div>

            <div className="circle">

                <div className="profile-circle">
                    <span>LT</span>
                </div>


            </div>

        </section>
    );
}

export default Home;
