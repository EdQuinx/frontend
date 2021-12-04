import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site_name } from '../api'
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { useAppContext } from '../state';

const LeftPanel = (props) => {
    const { hoversidebar } = useAppContext()
    const [clickColapse, setClickColapse] = useState(false)
    const [activeClass, setActiveClass] = useState("dashboard")

    const [hovering, setHovering] = hoversidebar

    const handleClickCollapse = (e, sState) => {
        if (e) {
            setClickColapse(!clickColapse)
            setActiveClass(sState)
        }
    }
    return (
        <aside className={hovering ? "left-sidebar left-sidebar-hover" : "left-sidebar"} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <ul id="slide-out" class="sidenav ps ps--theme_default ps--active-y" data-sidebarbg="skin5" data-ps-id="2af989e5-6060-41af-d5f4-c9fea1cd2b66">
                
                <li>
                    <ul className="collapsible">
                        <li className="small-cap"><span className="hide-menu">PERSONAL</span></li>
                        <li className={(clickColapse && activeClass == "dashboard") ? "active" : ""} onClick={(e) => handleClickCollapse(e, "dashboard")}>
                            <a  className="collapsible-header has-arrow"><i className="material-icons">dashboard</i><span className="hide-menu"> Dashboard</span></a>
                            <div className="collapsible-body" style={{}}>
                                <ul>
                                    <li><a href="index.html"><i className="material-icons">adjust</i><span className="hide-menu">Dashboard-1</span></a></li>
                                    <li><a href="index2.html"><i className="material-icons">adjust</i><span className="hide-menu">Dashboard-2</span></a></li>
                                    <li><a href="index3.html"><i className="material-icons">adjust</i><span className="hide-menu">Dashboard-3</span></a></li>
                                    <li><a href="index4.html"><i className="material-icons">adjust</i><span className="hide-menu">Dashboard-4</span></a></li>
                                </ul>
                            </div>
                        </li>
                         <li>
                            <a  className="collapsible-header has-arrow"><i className="material-icons">equalizer</i><span className="hide-menu"> Sidebar Types </span></a>
                            <div className="collapsible-body">
                                <ul>
                                    <li><a href="sidebar-type-minisidebar.html"><i className="material-icons">photo_size_select_small</i><span className="hide-menu">Minisidebar</span></a></li>
                                    <li><a href="sidebar-type-iconbar.html"><i className="material-icons">picture_in_picture</i><span className="hide-menu">Icon Sidebar</span></a></li>
                                    <li><a href="sidebar-type-overlay.html"><i className="material-icons">low_priority</i><span className="hide-menu">Overlay Sidebar</span></a></li>
                                    <li><a href="sidebar-type-fullsidebar.html"><i className="material-icons">present_to_all</i><span className="hide-menu">Full Sidebar</span></a></li>
                                    <li><a href="sidebar-type-horizontalsidebar.html"><i className="material-icons">power_input</i><span className="hide-menu">Horizontal Sidebar</span></a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a  className="collapsible-header has-arrow"><i className="material-icons">library_books</i><span className="hide-menu"> Page Layouts </span></a>
                            <div className="collapsible-body">
                                <ul>
                                    <li><a href="layout-inner-fixed-left-sidebar.html"><i className="material-icons">format_align_left</i><span className="hide-menu">Inner Fixed Left Sidebar</span></a></li>
                                    <li><a href="layout-inner-fixed-right-sidebar.html"><i className="material-icons">format_align_right</i><span className="hide-menu">Inner Fixed Right Sidebar</span></a></li>
                                    <li><a href="layout-inner-left-sidebar.html"><i className="material-icons">format_indent_increase</i><span className="hide-menu">Inner Left Sidebar</span></a></li>
                                    <li><a href="layout-inner-right-sidebar.html"><i className="material-icons">format_indent_decrease</i><span className="hide-menu">Inner Right Sidebar</span></a></li>
                                    <li><a href="page-layout-fixed-header.html"><i className="material-icons">line_weight</i><span className="hide-menu">Fixed Header</span></a></li>
                                    <li><a href="page-layout-fixed-sidebar.html"><i className="material-icons">line_weight</i><span className="hide-menu">Fixed Sidebar</span></a></li>
                                    <li><a href="page-layout-fixed-header-sidebar.html"><i className="material-icons">format_align_center</i><span className="hide-menu">Fixed Header & Sidebar</span></a></li>
                                    <li><a href="page-layout-boxed-layout.html"><i className="material-icons">format_line_spacing</i><span className="hide-menu">Boxed Layout</span></a></li>
                                </ul>
                            </div>
                        </li>
                      </ul>
                </li>
            </ul>
    </aside>
    )
}
export default LeftPanel