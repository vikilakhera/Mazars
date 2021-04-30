import React from "react";

export default function Header(){
    return(
        <div>
            <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
                <div class="navbar-wrapper">
                    <div class="navbar-container content">
                        <div class="collapse navbar-collapse show" id="navbar-mobile">
                            <ul class="nav navbar-nav mr-auto float-left">
                                <li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="fa fa-bars"></i></a></li>
                                
                                <li class="nav-item dropdown navbar-search"><a class="nav-link dropdown-toggle hide" data-toggle="dropdown" href="#"><i class="fa fa-search"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="arrow_box">
                                            <form>
                                                <div class="input-group search-box">
                                                    <div class="position-relative has-icon-right full-width">
                                                        <input class="form-control" id="search" type="text" placeholder="Search here..."/>
                                                        <div class="form-control-position navbar-search-close"><i class="fa fa-times">   </i></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav float-right">
                        
                                <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"><span class="avatar avatar-online"><img src="https://themeselection.com/demo/chameleon-free-bootstrap-admin-template/theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar"/></span></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                    <div class="arrow_box_right"><a class="dropdown-item" href="#"><span class="avatar avatar-online"><img src="https://themeselection.com/demo/chameleon-free-bootstrap-admin-template/theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar"/><span class="user-name text-bold-700 ml-1">John Doe</span></span></a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fa fa-user-circle"></i> Edit Profile</a><a class="dropdown-item" href="#"><i class="fa fa-envelope-o"></i> My Inbox</a><a class="dropdown-item" href="#"><i class="fa fa-tasks"></i> Task</a><a class="dropdown-item" href="#"><i class="fa fa-comment-o"></i> Chats</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i> Logout</a>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}