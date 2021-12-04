import React, { useState } from "react";
import { useAppContext } from "../state";


const HeaderBar = (props) => {
    // const [hovering, setHovering] = useState(false)


    // gọi biến chứa state từ state.js bằng hàm useAppContext trong state.js
    const { hoversidebar } = useAppContext()

    // gán state nội bộ vào biến => state nội bộ th.đổi sẽ truyền vào biến => truyền vào useAppContext => truyền vào state gốc
    const [hovering, setHovering] = hoversidebar

    return (
        <div>
            <header className="topbar">
                <nav data-navbarbg="skin6">
                    <div className="nav-wrapper">
                        <a href="javascript:void(0)" className={`brand-logo ${hovering ? "full-logo" : ""}`} data-logobg="skin5" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                            <span className="icon">
                                <img className="light-logo" src="../assets/images/logo-light-icon.png" />
                                <img className="dark-logo" src="../assets/images/logo-icon.png" />
                            </span>
                            <span className="text">
                                <img className="light-logo" src="../assets/images/logo-light-text.png" />
                                <img className="dark-logo" src="../assets/images/logo-text.png" />
                            </span>
                        </a>
                        <ul className="left">
                            <li className="hide-on-med-and-down">
                                <a  className="nav-toggle">
                                    <span className="bars bar1"></span>
                                    <span className="bars bar2"></span>
                                    <span className="bars bar3"></span>
                                </a>
                            </li>
                            <li className="hide-on-large-only">
                                <a  className="sidebar-toggle">
                                    <span className="bars bar1"></span>
                                    <span className="bars bar2"></span>
                                    <span className="bars bar3"></span>
                                </a>
                            </li>
                            <li><a className="dropdown-trigger"  data-target="noti_dropdown"><i className="material-icons">notifications</i></a>
                                <ul id="noti_dropdown" className="mailbox dropdown-content">
                                    <li>
                                        <div className="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div className="message-center">

                                            <a href="#">
                                                <span className="btn-floating btn-large red"><i className="material-icons">link</i></span>
                                                <span className="mail-contnet">
                                                    <h5>Launch Admin</h5>
                                                    <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="btn-floating btn-large blue"><i className="material-icons">date_range</i></span>
                                                <span className="mail-contnet">
                                                    <h5>Event today</h5>
                                                    <span className="mail-desc">Just a reminder that you have event</span>
                                                    <span className="time">9:10 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="btn-floating btn-large cyan"><i className="material-icons">settings</i></span>
                                                <span className="mail-contnet">
                                                    <h5>Settings</h5>
                                                    <span className="mail-desc">You can customize this template as you want</span>
                                                    <span className="time">9:08 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="btn-floating btn-large green"><i className="material-icons">face</i></span>
                                                <span className="mail-contnet">
                                                    <h5>Lily Jordan</h5>
                                                    <span className="mail-desc">Just see the my admin!</span>
                                                    <span className="time">9:02 AM</span>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="center-align" href="javascript:void(0);"> <strong>Check all notifications</strong> </a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="dropdown-trigger"  data-target="msg_dropdown"><i className="material-icons">comment</i></a>
                                <ul id="msg_dropdown" className="mailbox dropdown-content">
                                    <li>
                                        <div className="drop-title">You have 4 new messages</div>
                                    </li>
                                    <li>
                                        <div className="message-center">

                                            <a href="#">
                                                <span className="user-img">
                                                    <img src="../assets/images/users/1.jpg" alt="user" className="circle" />
                                                    <span className="profile-status online pull-right"></span>
                                                </span>
                                                <span className="mail-contnet">
                                                    <h5>Chris Evans</h5>
                                                    <span className="mail-desc">Just see the my admin!</span>
                                                    <span className="time">9:30 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="user-img">
                                                    <img src="../assets/images/users/2.jpg" alt="user" className="circle" />
                                                    <span className="profile-status busy pull-right"></span>
                                                </span>
                                                <span className="mail-contnet">
                                                    <h5>Ray Hudson</h5>
                                                    <span className="mail-desc">I've sung a song! See you at</span>
                                                    <span className="time">9:10 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="user-img">
                                                    <img src="../assets/images/users/3.jpg" alt="user" className="circle" />
                                                    <span className="profile-status away pull-right"></span>
                                                </span>
                                                <span className="mail-contnet">
                                                    <h5>Lb James</h5>
                                                    <span className="mail-desc">I am a singer!</span>
                                                    <span className="time">9:08 AM</span>
                                                </span>
                                            </a>

                                            <a href="#">
                                                <span className="user-img">
                                                    <img src="../assets/images/users/4.jpg" alt="user" className="circle" />
                                                    <span className="profile-status offline pull-right"></span>
                                                </span>
                                                <span className="mail-contnet">
                                                    <h5>Don Andres</h5>
                                                    <span className="mail-desc">Just see the my admin!</span>
                                                    <span className="time">9:02 AM</span>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="center-align" href="javascript:void(0);"> <strong>See all e-Mails</strong> </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="search-box">
                                <a ><i className="material-icons">search</i></a>
                                <form className="app-search">
                                    <a className="srh-btn"><i className="ti-close" ></i></a>
                                    <input type="text" className="form-control" placeholder="Search &amp; enter" />
                                </form>
                            </li>
                        </ul>
                        <ul className="right">
                            <li><a className="dropdown-trigger"  data-target="user_dropdown"><img src="../assets/images/users/2.jpg" alt="user" className="circle profile-pic"></img></a>
                            <ul id="user_dropdown" class="mailbox dropdown-content dropdown-user" tabindex="0">
                                                            <li>
                                        <div className="dw-user-box">
                                            <div className="u-img"><img src="../assets/images/users/2.jpg" alt="user" /></div>
                                            <div className="u-text">
                                                <h4>Steve Harvey</h4>
                                                <p>steve@gmail.com</p>
                                                <a className="waves-effect waves-light btn-small red white-text">View Profile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#"><i className="material-icons">account_circle</i> My Profile</a></li>
                                    <li><a href="#"><i className="material-icons">account_balance_wallet</i> My Balance</a></li>
                                    <li><a href="#"><i className="material-icons">inbox</i> Inbox</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#"><i className="material-icons">settings</i> Account Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#"><i className="material-icons">power_settings_new</i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
       
        </div>
    );
}
export default HeaderBar