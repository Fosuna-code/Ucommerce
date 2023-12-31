import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function NavItem({to, children, activeStyle}){
    return (
        <NavLink to={to} 
        className={({isActive}) => (isActive ? activeStyle : undefined)}>
            {children}
        </NavLink>
    )
}

function Navbar(){
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavItem to='/' activeStyle="">
                        Shopi
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/' activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/clothes' activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/electronics' activeStyle={activeStyle}>
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/furnitures' activeStyle={activeStyle}>
                        Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/toys' activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/others' activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    fosuna@email.com
                </li>
                <li>
                    <NavItem to='/MyOrders' activeStyle={activeStyle}>
                        My Orders
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/MyAccount' activeStyle={activeStyle}>
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/SingIn' activeStyle={activeStyle}>
                        Sing in
                    </NavItem>
                </li>
                <li className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div>
                    {context.count}
                </div>
                
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;