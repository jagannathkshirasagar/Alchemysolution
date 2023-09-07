import React from 'react'
import { Link } from "react-router-dom";
import "../Css/Talentdevelopment.css"
const TalentDevelopment = () => {
  return (
    <div>
        <div className='container-fluid pt-5  overflow-hidden' >
                <div className='row parent banner_content text-center' >
                    <div className='magicpattern col-sm-12 col-md-12 col-lg-6 h-100  d-flex flex-column justify-content-center align-items-center  top-50'>
                      <h2 className='text-white w-75' style={{fontSize:'50px'}}>Unlock the power of Talent Development and Transformation</h2>
                        <p className='text-white w-50  m-4'style={{fontSize:'20px'}} >Keeping companies and individuals ahead of the technology curve through transformative, digital-first learning and organizational solutions. </p>
                    </div>

                </div>
            </div>

            <div className='mt-5'>
        <nav aria-label="breadcrumb"  style={{marginTop:'100px',marginLeft:'100px'}}>
          <ol class="breadcrumb">
            <li class="breadcrumb-item "><Link className='text-decoration-none text-dark' to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link className='text-decoration-none text-dark ' to="/">Talent Solutions</Link></li>
            <li class="breadcrumb-item active" aria-current="page"><Link  className='text-decoration-none  text-dark'to="/direct-hire-placement">Talent Development and Transformation</Link></li>
          </ol>
        </nav>
      </div>


      <div className='container container-lg p-5  overflow-hidden'>
                <div className='row Digital_Talent'>
                    <div className='col-md-6 col-sm-12 '>
                        <div className='Digital_Talent_heading m-2'> Our Approach </div>
             
                    </div>
                    <div className='col-md-6 col-sm-12 '>
                        <div>
                            <div className='progress_digital m-2'> The technology landscape is always evolving and only getting faster. With new innovations and competitors emerging every day, business leaders must choose between evolving for the future or falling behind.</div>
                            <div className='progress_digital m-2'>Alchemy Solutions believes that transformation cannot happen without digital-ready talent. That’s why we offer Digital Talent Transformation—giving companies a competitive edge by future-proofing their workforces. Our collective knowledge, interactive solutions, and wealth of resources equip people with the skill, mindset, and experience they need to drive business growth. </div>
                        </div>
                    </div>
                </div>
            </div>
<section className='we_work position-relative'>

<div className='container container-lg'>
    <h2 className='worked'>How We Work</h2>
    <div className='work_image'>
        <img alt='' src='https://collabera.com/wp-content/uploads/2022/12/Rectangle-27493-2.svg' className='d-none d-md-block w-100'/>
        <p>We support candidates and companies through every step of the process, from hiring and training to deploying and upskilling talent. Beginning with a comprehensive evaluation, we identify the best talent and tailor programming to individual goals. We then provide a wealth of digital resources, customized learning approaches, and hands-on mentorship. Individuals emerge digital ready with our learning solutions and make meaningful contributions to their organizations from day one.
            <b>That’s the Collabera advantage!</b>
             </p>
    </div>
</div>

</section>

<div className='we_offer_new position-relative'style={{background: 'rgba(169, 169, 169, 0.23)'}}>

    <div className='container container-lg' >
        <h2>What We Offer</h2>
        <div className='row' >
            <div className='col-md-6  col-sm-12 bg_star_img'>
                <div className='imgOverlay'>
                    <img alt='' className='w-100' src='https://collabera.com/wp-content/uploads/2022/12/Rectangle-173-2.svg'/>
                </div>
                <p className='jump'>Hire, train, and deploy talent to build your emerging technology solutions.</p>
                <p className='source'>Sourcing, evaluating, hiring, and training talent is a big investment of time and money for any company. Through the transformative early talent program, we source, train, and deploy highly skilled, digitally-native individuals to be productive long-term. With an agile digital curriculum and continuous opportunities to learn post-graduation, these digitally skilled individuals are ready to contribute on day one and future-proofed to meet the rapidly changing technology needs of today’s best companies.</p>
            </div>
            <div className='col-md-6  col-sm-12 bg_star_img'>
                <div className='imgOverlay'>
                    <img alt='' className='w-100' src='https://collabera.com/wp-content/uploads/2022/12/Rectangle-27503-8.svg'/>
                </div>
                <p className='jump'>Advance the Digital DNA of <br/>  your workforce.</p>
                <p className='source'> It’s time for companies to collectively and radically align their mindsets for the future. Alchemy Solutions  provides leading edge digital talent upskill and reskill solutions that are designed to keep businesses and their employees comfortably ahead of the technology curve. Your total talent transformation will only help you keep up with the times.</p>
            </div>

        </div>

    </div>
</div>


<section className='global_tech_new position-relative'>
    <div className='container container-lg'>
        <p>We customize the learning program to your individual goals and business needs to keep you ahead of disruption. And because learning doesn’t happen only in the classroom, our virtual resources are accessible 24/7.</p>
        <div className='row justify-content-center align-items-center'>
            <div className='col-md-6 col-sm-10'>
                <h2 style={{fontSize:'48px'}}>Global Reach</h2>
            </div>
            <div className='col-md-6 col-sm-10 '>               
                    <p className='para'>Our extensive network of professional candidates in various industries spans the globe. We’ve helped over 100,000 people in more than 37 countries through our digital talent solutions.</p>
                
            </div>
        </div>
        <figure className='one'>
            <img alt='' className=' img-fluid' src='https://collabera.com/wp-content/uploads/2022/12/Rectangle-27500-3.svg'/>
        </figure>
        <div className='row'>
        <div className='col-md-6 col-sm-10'>
                <h2 style={{fontSize:'48px'}}>Top Technology</h2>
            </div>
            <div className='col-md-6 col-sm-10'>               
                    <p className='para'>Our curricula cover the most critical skills and emerging technologies to help teams and companies remain relevant in their industry, from cloud computing to cyber security and machine learning. </p>
                
            </div>
        </div>
        <figure className='Two'>
            <img alt=''  className=' img-fluid' src='https://collabera.com/wp-content/uploads/2022/12/Rectangle-27501-2.svg'/>
        </figure>
        <div className=' learn_btn'>
            <a className='btn' target='_blank'>Learn More</a>
        </div>
    </div>
</section>
    </div>
  )
}

export default TalentDevelopment