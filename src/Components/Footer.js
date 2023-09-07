import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Components/Landingpage.css'

const Footer = () => {
  return (
    <div>

<div className='container-fluid overflow-hidden' style={{ backgroundColor: '#0d0d0d' }}>
                <div className='row d-flex flex-md-row flex-sm-column justify-content-center '>
                    <div className='col-md-6 col-snm-12 mt-5' style={{ textAlign: 'left' }}>
                        <a class="navbar-brand font-weight-bold" style={{ color: '#00a4e4', fontSize: '30px' }} href="#">Alchemy Solutions</a>
                        <p className='text-white clbera_ft_para'>Alchemy Solutions is a leading global digital talent solutions firm.  For over 25 years, we have provided digital and IT talent services, direct placement and career advisement, global remote talent and learning solutions to transform and  diversify workforces for the Fortune 1000 globally.</p>
                        <a type='button' className='btn navbtn2 btn-lg'>Consultant Login</a>
                    </div>
                    <div className='col-md-4 col-sm-12 justify-content-start mt-5' style={{ textAlign: 'left' }}>
                        <ul className='list-unstyled'>
                            <li><span className='text-white '>Phones</span></li>
                            <li>
                                <a href='tel:877.264.6424' className='mx-2 text-white text-decoration-none'>877.264.6424 |</a>
                                <a href='tel:+1.973.889.5200' className='mx-2 text-white text-decoration-none'>+1.973.889.5200</a>
                            </li>
                        </ul>
                        <ul className='list-unstyled'>
                            <li><span className='text-white'>Email</span></li>
                            <li><a href='mailto:info@collabera.com' className='mx-2 text-decoration-none text-white'>info@collabera.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className='row  mb-5 p-3'>
                    <div className='col-md-6 col-sm-10 '>
                        <ul className='list-unstyled d-flex justify-content-center  py-5'>
                            <li><a href='https://twitter.com/Collabera ' className='mx-2'><TwitterIcon style={{ color: 'Azure' }} /></a></li>
                            <li><a href='https://www.facebook.com/Collabera' className='mx-2'><FacebookIcon style={{ color: 'Azure' }} /></a></li>
                            <li><a href='https://www.instagram.com/collabera_llc/' className='mx-2'><InstagramIcon style={{ color: 'Azure' }} /></a></li>
                            <li><a href='https://www.linkedin.com/company/collabera/' className='mx-2'><LinkedInIcon style={{ color: 'Azure' }} /></a></li>
                            <li><a href='https://www.youtube.com/c/collabera' className='mx-2'><YouTubeIcon style={{ color: 'Azure' }} /></a></li>
                        </ul>

                    </div>
                    <div className='col-md-6 col-sm-10 contact_links mb-5'>
                        <ul className='contact_us list-unstyled d-flex   justify-content-between  py-5 ' >
                            <li ><a href='' className='text-decoration-none' >Contact Us</a></li>

                            <li><a href='' className=' text-decoration-none' >Terms of Use</a></li>

                            <li><a href='' className=' text-decoration-none'>Privacy Notice</a></li>

                            <li><a href='' className=' text-decoration-none'>Accessibility</a></li>

                            <li><a href='' className=' text-decoration-none'>LCA Posting</a></li>
                        </ul>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer