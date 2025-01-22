import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import './NavMenu.css';

const NavMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
          {isAuthenticated ? (
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
              </NavItem>
              <NavItem>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
              </NavItem>
            </ul>
          ) : (
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </NavItem>
            </ul>
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;

// export class NavMenu extends Component {
//   static displayName = NavMenu.name;

//   constructor (props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar () {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

//   render () {
//     return (
//       <header>
//         <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
//           <Container>
//             <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
//             <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//             <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
//               <ul className="navbar-nav flex-grow">
//               <NavItem>
//                   <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
//                 </NavItem>
//               </ul>
//             </Collapse>
//           </Container>
//         </Navbar>
//       </header>
//     );
//   }
// }
 