import { Navbar, NavbarBrand } from "reactstrap";
import Mylogo from "../app/assets/img/Mylogo.PNG";

const Header = () => {
    return(
        <Navbar dark color='primary' sticky='top' expand= 'md'>
            <NavbarBrand href='/'>
                <img className="my-logo" src={Mylogo} alt='derick logo' />
            </NavbarBrand>
        </Navbar>
    );
};


export default Header;




// import React from "react";

// function Header() {
//     return(
//         <nav>
//             <img className="my-logo" src="/images/Mylogo.PNG" alt="logo" />
//         </nav>
//     )
// }

// export default Header;