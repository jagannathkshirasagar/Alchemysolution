import React from 'react'

import "../Components/Landingpage.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Navbar from '../Components/Navbar';
import NavbottomFixed from '../Components/NavbottomFixed';
import Footer from '../Components/Footer';





const Landingpage = () => {

    return (
        <div>
<div class="video-background-holder">
  <div class="video-background-overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://collabera.com/wp-content/uploads/2023/04/Globe_Business_Collage_Web_Version.mp4" type="video/mp4" />
    </video>
  <div class="video-background-content container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 className='text-white '>The world is constantly evolving and so are our lives and the way we work.</h1>      
         <p className='text-white collebera_para m-4'>Alchemy Solutions creates positive change by bringing people, companies, and communities together across the globe. </p>

<div class="topbtns d-flex justify-content-start flex-wrap " >
    <a href='' className='btn navbtn1 m-2 text-center'>Find Amazing Talent</a>
    <a href='' className='btn navbtn2 m-2'>Find Your Dream Job</a>
</div>
       
       
      </div>
    </div>
  </div>
</div>


 
            {/* <div className='container-fluid pt-5  overflow-hidden' >
                
                <div className='row parent ' >
                    <div className='magicpattern col-sm-12 col-md-12 col-lg-6 h-100  d-flex flex-column justify-content-center align-items-md-center  top-50'>

                        <div className='collebera_heading m-4'><h1 className='text-white '>The world is constantly evolving and so are our lives and the way we work.</h1> </div>
                        <p className='text-white collebera_para m-4'>Alchemy Solutions creates positive change by bringing people, companies, and communities together across the globe. </p>

                        <div class="topbtns d-flex justify-content-center flex-wrap " >
                            <a href='' className='btn navbtn1 m-2 text-center'>Find Amazing Talent</a>
                            <a href='' className='btn navbtn2 m-2'>Find Your Dream Job</a>
                        </div>



                    </div>

                </div>
            </div> */}
            <div className='container-fluid  human_creation overflow-hidden'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-sm-12 col-md-7  d-flex flex-column  justify-content-center align-items-center'>

                        <h2 className='human_heading mb-3 ml-5 p-2 ' >We create human connections to change lives and deliver meaningful impact.</h2>


                        <p className='human_para my-2 pb-3 text-left ' >At Alchemy Solutions, we focus on bringing humanity back into the workplace by providing opportunities centered around positively impacting how we work, live, and thrive.</p>

                        <p className='human_para my-2 text-left'  >We offer a diverse, global “Talent Force” that helps our clients transform their entire business and achieve exceptional results. </p></div>

                    <div className='col-sm-12 col-md-5 my-2'>
                        <img className='w-100' alt='img' src='https://collabera.com/wp-content/uploads/2023/02/Group-48099334.png' />
                    </div>

                </div>
            </div>
            <div className='container-fluid overflow-hidden'>
                <div className='row'>
                    <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{ background: 'thistle', height: '400px' }}>

                        <h1 className='collebera_heading text-center w-75  my-2'>If you have been recently affected by a company layoff, we are here to help.</h1>
                        <div><p className='text-center m-2 collebera_para'>Click here to explore new job opportunities.</p></div>
                        <div>
                            <a href='' className='btn navbtn2 m-2' style={{ width: '300px' }}>New Job Opportunities</a>
                        </div>


                    </div>
                </div>
            </div>

            <div class="container-fluid border-top border-bottom py-5 overflow-hidden" style={{ background: 'ivory' }}>
                <div className="years border-bottom border-top w-75  aic m-auto">
                    <ul class="list-unstyled  p-2 d-flex align-items-center  justify-content-between  align-items-start" id="new_counter">
                        <li>
                            <div class="d-md-flex align-items-center justify-content-center  p-2 ">
                                <img alt="img" src='https://collabera.com/wp-content/themes/collabera/assets/images/Mask%20group%20(1).png' />
                                <p class="fw-bolder  p-2">Best Companies <br />for Diversity</p>
                            </div>
                        </li>

                        <li>
                            <div class="d-md-flex">
                                <div class="d-flex align-items-center justify-content-center  p-2">
                                    <h4 class="counter c_0 text-warning font-weight-bolder" data-targetnum="300" data-speed="1000">300+</h4>
                                    {/* <span class="sign text-warning">+</span> */}
                                </div>
                                <p className="fw-bolder  align-self-center p-2">Clients globally</p>
                            </div>
                        </li>

                        <li>
                            <div class="d-md-flex">
                                <div class="d-flex align-items-center justify-content-center  p-2">
                                    <h4 className="counter c_1 text-warning" data-targetnum="60" data-speed="1000">60 %</h4>
                                    {/* <span class="sign text-warning">%</span> */}
                                </div>
                                <p className="fw-bolder  p-2 ">Fortune 500 clients</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container container-lg p-5  overflow-hidden'>
                <div className='row Digital_Talent'>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='Digital_Talent_heading m-2'> Digital Talent Solutions </div>
                        <div className='Digital_Talent_para text-left m-2'> For a New Way of Doing Business </div>
                    </div>
                    <div className='col-md-6 col-sm-12 '>
                        <div>
                            <div className='progress_digital m-2'>Progress requires collaboration, trust, and a shared goal. At Alchemy Solutions, we strive every day to earn that trust and deliver the highest standard of partnership. We bring together the right digital talent to turn the impossible into reality.</div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='container-lg overflow-hidden' style={{ maxWidth: "1260px" }}>
                <div className='row g-3 mb-3'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='card multi_cards'>
                            <img class="card-img" src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-177.svg" alt="Card image" />
                            <div class="on_demand_img text-left">Staff Augmentation </div>
                            <div class="card-body">
                                <p class="card-text offer_card">Scale and flex your team to meet business priorities and needs with our expert digital talent.</p>
                                <a href=''>Learn About Staff Augmentation <ArrowRightAltIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='card multi_cards'>
                            <img class="card-img" src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-177-1.svg" alt="Card image" />
                            <div class="on_demand_img text-left"> Direct Placement </div>
                            <div class="card-body">
                                <p class="card-text offer_card">Accelerate recruiting end-to-end timelines with custom direct hire placement services.</p>
                                <a href=''>Find Your Next Rockstar Hire  <ArrowRightAltIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='card multi_cards'>
                            <img class="card-img" src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-177-3.svg" alt="Card image" />
                            <div class="on_demand_img text-left">Talent Development and Transformation   </div>
                            <div class="card-body">
                                <p class="card-text offer_card">Build and upskill a digital-ready workforce with state-of-the-art virtual learning solutions.</p>
                                <a href=''>Learn About Staff Augmentation <ArrowRightAltIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='card multi_cards'>
                            <img class="card-img" src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-177-4.svg" alt="Card image" />
                            <div class="on_demand_img text-left"> Global Remote Talent Platform  </div>
                            <div class="card-body">
                                <p class="card-text offer_card">Scale your business needs with a global network of 14M+ professionals on-demand and ready to work.</p>
                                <a href=''>Learn About Staff Augmentation <ArrowRightAltIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className='container-fluid' style={{ backgroundColor: '#0693e3' }}>
                <div className='row justify-content-center mb-5'>
                    <h2 className='make_an_impact pt-5'>Making an Impact </h2>
                    <p className='make_an_impact_para'>With over 25 years of experience, we specialize in sourcing high-quality talent to meet the unique needs of Fortune 500 and Global 1000 organizations across a range of sectors.</p>
                </div>
                <div className='row impact'>
                    <div className='col-sm-12 col-md-6 ' style={{ marginTop: '-30px' }}>
                        <div>
                             <div ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169.png" alt="Card image" /></div>
                        <div className=' d-flex flex-column '>
                            <div className='finance'>Financial Services, Banking, & Insurance</div>
                            <div className='faster'>Enabling faster transactions & better service.</div>
                        </div>
                        </div>
                       
                     </div>

                    <div className='col-sm-12 col-md-6 '>
                            <div className='mt-5' ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-5.svg" alt="Card image" /></div>
                            <div className=' d-flex flex-column '>
                                <div className='finance'>Healthcare </div>
                                <div className='faster ml-5 '>Managing regulatory systems so  Healthcare workers can focus on putting the care in healthcare.</div>
                            </div></div>                 

                    <div className=' col-sm-12 col-md-6 ' style={{ marginTop: '30px' }}>
                        <div ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/dfsdf.png" alt="Card image" /></div>
                        <div className=' d-flex flex-column '>
                            <div className='finance'> Energy, Oil, and Gas </div>
                            <div className='faster'>Fueling frictionless systems and pipelines for over 25 years.</div>
                            </div>
                    </div>

                    <div className='col-sm-12 col-md-6 '>
                        <div className='mt-5'><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-6.svg" alt="Card image" /></div>

                        <div className=' d-flex flex-column'>
                            <div className='finance'>Telecom, Media, & Technology</div>
                            <div className='faster mb-5'>Powering systems to keep the world connected and entertained.</div>
                        </div>
                    </div>
                    {/* <div className='col-md-6 col-sm-12'>
                           
                        </div>
                        <div className='col-md-6 col-sm-12'>
                       
                        </div> */}
                </div>
            </div>
            <div className='container container-lg p-5 overflow-hidden '>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <h2 className='Digital_Talent'> Happenings at Alchemy Solutions </h2>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div>
                            <p className='progress_digital text-left'>Check out the fun activities and events we have been hosting and what makes our company and culture unique.</p>

                        </div>
                    </div>
                </div>
            </div>

           <Footer/>

           
            <NavbottomFixed />





        </div>
    )
}

export default Landingpage