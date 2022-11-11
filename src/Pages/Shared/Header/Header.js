import React, { useContext } from 'react';
import { Button, Container, Image, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt, FaUser, FaInstagram, FaLinkedin, FaTwitter, FaPinterest, FaFacebookSquare, FaRegEnvelope, FaYelp } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-wide bg-body">
                <div className="container">
                    <Link className='pb-2' to="/"><img src={navLogo} alt="" width="200px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-wide-items align-items-center navbar-nav me-auto mb-2 p-lg-0 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-warning" : "nav-link"} to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-warning" : "nav-link"} to="services">SERVICES</NavLink>
                            </li>
                            {
                                user?.uid ?
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => isActive ? "nav-link text-warning" : "nav-link"} to="addService">ADD SERVICE</NavLink>
                                </li>
                                :
                                <li className='d-none'></li>
                            }
                            {
                                user?.uid ?
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => isActive ? "nav-link text-warning" : "nav-link"} to="myReviews">MY REVIEWS</NavLink>
                                </li>
                                :
                                <li className='d-none'></li>
                            }
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link text-warning" : "nav-link"} to="blog">BLOG</NavLink>
                            </li>
                            <li className='nav-item'>
                                {
                                    user?.uid ?
                                    <>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>{user?.displayName}</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Image className='ms-2' style={{width: '35px'}} roundedCircle src={user.photoURL} alt="user"></Image>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>Logout</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Button onClick={handleLogOut} variant='outline-dark mb-lg-0 ms-4'><FaSignOutAlt className='mb-1' /></Button>
                                        </OverlayTrigger>
                                    </>
                                    :
                                    <>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>User</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Button variant="ms-1 "><FaUser className='fs-4' /></Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            delay={{ hide: 400, show: 200 }}
                                            overlay={(props) => (
                                            <Tooltip {...props}>Login</Tooltip>
                                            )}
                                            placement="bottom"
                                            ><Link to='/login' className='btn btn-outline-dark mb-lg-0 ms-3'><FaSignInAlt className='mb-1' /></Link>
                                        </OverlayTrigger>
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Navbar className='bg-warning navbar-thin'>
                <Container>
                    <Navbar.Text>
                        <Link className='text-dark text-decoration-none ms-1'><FaRegEnvelope className='me-md-2' /> mr.locker@yahoo.com</Link>
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link className='text-dark text-decoration-none me-3'><FaFacebookSquare /></Link>
                        <Link className='text-dark text-decoration-none me-3'><FaPinterest /></Link>
                        <Link className='text-dark text-decoration-none me-3'><FaTwitter /></Link>
                        <Link className='text-dark text-decoration-none me-3'><FaYelp /></Link>
                        <Link className='text-dark text-decoration-none me-3'><FaInstagram /></Link>
                        <Link className='text-dark text-decoration-none'><FaLinkedin /></Link>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;