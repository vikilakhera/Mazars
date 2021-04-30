import React from "react";
import {
    HashRouter as Router,
    NavLink
} from 'react-router-dom';

export default function Sidebar(){
    
    return(
        <div>
            <div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="https://themeselection.com/demo/chameleon-free-bootstrap-admin-template/theme-assets/images/backgrounds/02.jpg">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">       
                <li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="https://themeselection.com/demo/chameleon-free-bootstrap-admin-template/theme-assets/images/logo/logo.png"/>
                    <h3 class="brand-text">Mazars</h3></a></li>
                <li class="nav-item d-md-none"><a class="nav-link close-navbar"><i class="fa fa-times"></i></a></li>
                </ul>
            </div>
            <div class="main-menu-content">
                        <div>
                            <Router>
                                <ul class="navigation navigation-main custom" id="main-menu-navigation" data-menu="menu-navigation">
                                    <li><NavLink to="/customer/index"><i class="fa fa-home"></i><span class="menu-title" data-i18n="">Dashboard</span></NavLink>
                                    </li>
                                    <li><NavLink to="/customer/feedback"><i class="fa fa-rss-square"></i><span class="menu-title" data-i18n="">Feedback</span></NavLink>
                                    </li>
                                    <li><NavLink to="/customer/first"><i class="fa fa-rss-square"></i><span class="menu-title" data-i18n="">First</span></NavLink>
                                    </li>
                                    <li><NavLink to="/customer/second"><i class="fa fa-rss-square"></i><span class="menu-title" data-i18n="">Second</span></NavLink>
                                    </li>
                                </ul>

                                
                            </Router>
                        </div>

            </div>
            <div class="navigation-background"></div>
            </div>
        </div>
    );
}