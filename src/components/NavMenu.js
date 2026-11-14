import { NavLink, Outlet } from 'react-router-dom';
function NavMenu()
{
    return (
        <div>
        <nav>
            <ul>
                <li>    <NavLink to="/">          Home        </NavLink></li>
                <li>    <NavLink to="/About">     About       </NavLink></li>
                <li>    <NavLink to="/Articles">  Articles    </NavLink></li>
            </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default NavMenu;