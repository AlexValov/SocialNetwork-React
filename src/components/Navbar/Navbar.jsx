import React from 'react';
import style from './Navbar.module.css';
import SideBar from './SideBar/SideBar'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}> {/* если коас эктив то выделяет дрегим цветом  */}
                < NavLink to='/messages' activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                < NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                < NavLink to='/music'activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                < NavLink to='settings' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            
            <SideBar state={props.state}/>
        </nav>
    )
};
export default Navbar;
