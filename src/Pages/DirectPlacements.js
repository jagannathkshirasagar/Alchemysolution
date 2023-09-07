import React from 'react'
import { Link } from "react-router-dom";
import "../Pages/DirectPlacement.css"
import Footer from '../Components/Footer';
import NavbottomFixed from '../Components/NavbottomFixed';


const DirectPlacements = () => {
  return (
    <div>


<div className='container-fluid pt-5  overflow-hidden' >
                <div className='row parent ' >
                    <div className='magicpattern col-sm-12 col-md-12 col-lg-6 h-100  d-flex flex-column justify-content-center align-items-center  top-50'>
                      <h2 className='text-white' style={{fontSize:'50px'}}>Direct Placement</h2>
                        <p className='text-white  m-4'style={{fontSize:'20px'}} >We’ll help you hire the perfect fit </p>
                    </div>

                </div>
            </div>
      {/* <section className='talent_banner banner_overlay position-relative mt-5'>
        <div className='banner_content text-center align-items-center '  style={{marginTop:'100px'}}>
          <h2>Direct Placement</h2>
          <p>We’ll help you hire the perfect fit</p>
        </div>
      </section> */}

      <div className='mt-5'>
        <nav aria-label="breadcrumb"  style={{marginTop:'100px',marginLeft:'100px'}}>
          <ol class="breadcrumb">
            <li class="breadcrumb-item "><Link className='text-decoration-none text-dark' to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link className='text-decoration-none text-dark ' to="/">Talent Solutions</Link></li>
            <li class="breadcrumb-item active" aria-current="page"><Link  className='text-decoration-none  text-dark'to="/direct-hire-placement">Direct Placement</Link></li>
          </ol>
        </nav>
      </div>


      <section className='lets_face'>
        <div className='container container-lg'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 mt-5'>
              <p>Let’s face it, hiring is hard these days! The market is constantly evolving, and we have the tools and experts to help you navigate the future of work. At Collabera, we have a dedicated team of direct placement professionals who specialize in finding the best candidates across a wide array of industries. Our proven methodology has helped countless organizations find top talent; from start-ups to the world’s largest Fortune 500 organizations.</p>
              <p className='partner_attract'>We partner with you to attract top talent whether the opportunity is onsite, hybrid, or remote.</p>
            </div>
            <div className='col-sm-12 col-md-6'>

              <div className='img_ad'>
                <figure>
                  <img alt='' className='w-50' src='https://collabera.com/wp-content/uploads/2022/12/direct_club_img.png' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className='container-fluid' style={{background:'rgb(169 169 169 / 23%)'}}>
        <div className='row'>
          <div className='col-sm-12 col-md-12 '>
          <h2 className='How_We_Do position-relative text-center '>How do we do it?</h2>
          </div>
   
          <div className='col-sm-12 col-md-6 mt-4 Extension'>
            <div className='align-items-center d-flex flex-md-column justify-content-center'>
            <h6 className='align-items-end'>Extension of You</h6>
            <p >We become an extension of your organization. Our partnerships are designed to get to know you, your team, and what works in your culture in order to find you the perfect fit.</p>
            </div>
            
            
          </div>
          <div className='col-sm-12 col-md-6 mt-4 Extension'>
          <div className='align-items-center d-flex flex-md-column justify-content-center'>
            <h6>Using Best Practices</h6>
            <p>We have a database of over 4 million candidates. Using AI technology to perform in-depth candidate searches, we find the right match.</p>
          </div>
          </div>
          <div className='col-sm-12 col-md-6 mt-4 Extension'>
          <div className='align-items-center d-flex flex-md-column justify-content-center'>
            <h6>Looking Beyond</h6>
            <p><p>We expand your talent pool by reaching out to candidates who are not actively looking yet and discuss your opportunity, company, and culture with them.</p></p>
          </div>
          </div>
          <div className='col-sm-12 col-md-6 mt-4 Extension'>
          <div className='align-items-center d-flex flex-md-column justify-content-center'>
            <h6>Time Efficient</h6>
            <p>We reduce your time to hire. We are an extension of your team, and we provide qualified candidates quickly for you to interview and hire.</p>
          </div>
          </div>

        </div>
      </div>
      <section className='why_clients position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <h2 style={{maxWidth:'392px'}}>Why Do Clients Trust Us to Fill Their Roles?</h2>
            </div>
            <div className='col-md-6 col-sm-12  '>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button btn btn-block text-left mentor position-relative mentor1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Technology at the Forefront
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Our proprietary systems access and verify the talent’s capabilities and technical skills.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Experts in the Field
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse border-0" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Our Direct placement team has extensive experience and we have been named one of Forbes Best Recruiting Firms for multiple years
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Our Position Fill Rate Speaks for Itself
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      We have a 93% placement rate as our team matches talent for a “best fit” for your needs and your company culture to provide a high success rate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
            <NavbottomFixed/>

    </div>
  )
}

export default DirectPlacements