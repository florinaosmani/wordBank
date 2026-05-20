import { Outlet, NavLink } from 'react-router-dom';

import classes from '../resources/css/root.module.css';

function Root () {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? classes.active : ""}>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='favorites'
                                className={({ isActive }) => isActive ? classes.active : ""}>
                                Favorites
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root;