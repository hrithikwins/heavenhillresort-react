import React from 'react';

const TopNav = () => (
    <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
            </div>
        </div>
        <div className="site-mobile-menu-body" />
    </div> {/* .site-mobile-menu */ }
<div className="site-navbar-wrap">
    <div className="site-navbar-top">
        <div className="container py-3">
            <div className="row align-items-center">
                <div className="col-6">
                    <a href="#" className="p-2 pl-0"><span className="icon-twitter" /></a>
                    <a href="http://facebook.com/heavenhill.3" className="p-2 pl-0"><span className="icon-facebook" /></a>
                    <a href="http://www.instagram.com/heaven_hill_resort" className="p-2 pl-0"><span className="icon-instagram" /></a>
                    <a href="tel:9021184505" className="p-2 pl-0"><span className="icon-phone" /></a>
                </div>
                <div className="col-6">
                    <div className="d-flex ml-auto">
                        <a href="#" className="d-flex align-items-center ml-auto mr-4">
                            <span className="icon-envelope mr-2" />
                            <span className="d-none d-md-inline-block">heavenhillagroresort@gmail.com</span>
                        </a>
                        <a href="#" className="d-flex align-items-center">
                            <span className="icon-phone mr-2" />
                            <span className="d-none d-md-inline-block">+91 90211 84505</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);