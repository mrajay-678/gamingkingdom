const TopMenu = () => {
    return (
        <>
            <header className="header-area header-three">

                <div id="header-sticky" className="menu-area">
                    <div className="container-fluid pl-50 pr-50">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1">
                                    <div className="logo">
                                        <a href="index.html"><img src="images/android-chrome-192x192.png" alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">

                                </div>
                                <div className="col-xl-6 col-lg-6">

                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li className="has-sub"><a href="gallery.html">Pages</a>
                                                    <ul>
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="faq.html">Faq</a></li>
                                                        <li><a href="game.html">Our Game</a></li>
                                                        <li><a href="matchese.html">Matchese</a>
                                                        </li>
                                                        <li><a href="matchese-details.html">Matchese Details</a></li>
                                                        <li><a href="live-streaming.html">Live Streaming</a></li> <li><a href="error.html">404 Page</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 text-left d-none d-lg-block mt-30 mb-30">
                                    <div className="cart-top">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#" className="menu-tigger"><i className="fas fa-search"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 text-right d-none d-lg-block mt-30 mb-30">
                                    <a href="#" className="menu-tigger"><img src="images/bg/toggle-menu.png" alt="logo" /></a>
                                </div>


                                <div className="col-12">
                                    <div className="mobile-menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- offcanvas-area --> */}
            <div className="offcanvas-menu">
                <span className="menu-close"><i className="fas fa-times"></i></span>
                <form role="search" method="get" id="searchform" className="searchform"
                    action="http://wordpress.zcube.in/xconsulta/">
                    <input type="text" name="s" id="search" placeholder="Search" />
                    <button><i className="fa fa-search"></i></button>
                </form>


                <div id="cssmenu3" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-2" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="index.html">Home</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="about.html">About Us</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="services.html">Services</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="pricing.html">Pricing </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="team.html">Team </a></li>

                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="projects.html">Gallery
                            Study</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="blog.html">Blog</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>

                <div id="cssmenu2" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#home"><span>+8 12
                            3456897</span></a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom"><a
                            href="#howitwork"><span>info@example.com</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="offcanvas-overly"></div>
            {/* <!-- offcanvas-end --> */}
        </>
    )
}

export default TopMenu
