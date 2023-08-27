'use client';
import React, { useEffect } from 'react'

const MouseHover = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const magicElement = document.querySelector(".magic");
            magicElement.style.left = e.pageX - 180 + "px";
            magicElement.style.top = e.pageY - 180 + "px";
        };

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
                                <div className="col-xl-8 col-lg-2">
                                    <div className="logo d-flex">
                                        <h1 style={{color: '#ffc010'}}>GAMES KINGDOM</h1>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-8 text-right text-xl-right">
                                </div>
                                <div className="col-xl-2 col-lg-2 text-right d-none d-lg-block">
                                    <a href="mailto:  gameskingdom390@gmail.com" style={{ color: "#ffc010" }}>Email us <i className="bi bi-envelope ms-2" /></a>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu"></div>
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
                    <p className="text-bold text-capitalize mb-0">Play with Precision, Win with Strategy.</p>
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
