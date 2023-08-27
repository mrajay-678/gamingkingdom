'use client';
import React, { useEffect } from 'react'

const MouseHover = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const magicElement = document.querySelector(".magic");
            magicElement.style.left = e.pageX - 180 + "px";
            magicElement.style.top = e.pageY - 180 + "px";
        };
        if (screen.width <= 1024) {
            var tl = gsap.timeline()
              .to('.magic', {
                left: "random(-100, 100,5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
                top: "random(-100, 400,5)",
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                repeatRefresh: true // gets a new random leftand y value on each repeat
              })
          }
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <>
            <header className="header-area header-three">
                <div id="header-sticky" className="menu-area">
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="logo d-flex">
                                        <h1 style={{color: '#ffc010'}}>GAMES KINGDOM</h1>
                                    </div>
                                </div>
                                <div className="col-4 text-right">
                                    <a href="mailto:  gameskingdom390@gmail.com" style={{ color: "#ffc010" }}>Email us <i className="bi bi-envelope ms-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="magic"
                style={{
                    position: "absolute"
                }}
            >
            </div>
            <div className="scene ">
                <div className="content ">
                    <p className="text-bold text-capitalize mb-5 mb-md-0">Play with Precision, Win with Strategy.</p>
                    <p className="text-bold">Unleash Your Inner Champion!</p>
                    <div className="my-5 comming-soon">
                        <p style={{ lineHeight: "110px" }}>UNVEILING SOON</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MouseHover
