import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-2 border-bottom">
                <div class="container-fluid"> 
                <a class="navbar-brand font-weight-bold" href="#"> <Link to="/" className='text-decoration-none' style={{ color:'#00a4e4',fontSize:'30px'}} >Alchemy Solutions</Link></a>                           
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="main_nav">
                        <ul class="navbar-nav justify-content-between align-items-start">

                            <li class="nav-item dropdown " id="myDropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Talent Solutions  </a>
                                <ul class="dropdown-menu">
                                    <li> <Link className='text-decoration-none text-dark ' to="/staff" style={{marginLeft:'15px'}}>Staff Augmentation </Link></li>
                                    <li> <Link class="dropdown-item "  to="/direct-hire-placement" > Direct Placement</Link> </li>
                                    <li> <Link class="dropdown-item "  to="/talent-development-and-transformation" > Talent Development and Transformation</Link></li>
                                    <li><a class="dropdown-item  " href="#">Global Remote Talent platform</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown " id="myDropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Industries </a>
                                <ul class="dropdown-menu">
                                    <li> <a class="dropdown-item " href="#">Banking and Financial sevice </a></li>
                                    <li> <a class="dropdown-item " href="#"> Healthcare and Life sciences </a> </li>
                                    <li><a class="dropdown-item " href="#"> Tech,Media and Telecom</a></li>
                                    <li><a class="dropdown-item  " href="#">Energy,Oil and Gas</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown" id="myDropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Insights&Community  </a>
                                <ul class="dropdown-menu">
                                    <li> <a class="dropdown-item" href="#"> Career Resources and Guids </a></li>
                                    <li> <a class="dropdown-item" href="#"> Thought Leadership  </a> </li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown" id="myDropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Join Us  </a>
                                <ul class="dropdown-menu">
                                    <li> <a class="dropdown-item" href="#"> Join Us </a></li>
                                    <li> <a class="dropdown-item" href="#"> Search Jobs  </a> </li>
                                    <li><a class="dropdown-item" href="#"> Submit Resume </a></li>
                                    <li><a class="dropdown-item" href="#"> Reffereal Program</a></li>
                                    <li><a class="dropdown-item" href="#"> Global Talent Assistance </a></li>
                                    <li><a class="dropdown-item" href="#">Achemy Solutions GTC </a></li>
                                    <li><a class="dropdown-item" href="#"> Events </a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown" id="myDropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Who we are  </a>
                                <ul class="dropdown-menu">
                                    <li> <a class="dropdown-item" href="#">Who We Are </a></li>
                                    <li> <a class="dropdown-item" href="#"> Diversity and Inclusion  </a> </li>
                                    <li><a class="dropdown-item" href="#"> Corporate Social Responsibility </a></li>
                                    <li><a class="dropdown-item" href="#"> News and Recognition </a></li>
                                    <li><a class="dropdown-item" href="#"> Contact us </a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="nav_btn d-flex flex-md-row flex-sm-column  justify-content-center ">
                            <a href='' className='btn navbtn1 m-2 text-center ' >Find Amazing Talent</a>
                            <a href='' className='btn navbtn2 m-2 text-center'>Find Your Dream Job</a>
                        </div>
                    </div>

                </div>


            </nav>

    </div>
  )
}

export default Navbar