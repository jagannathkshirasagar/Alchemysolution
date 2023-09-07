import React from 'react'
import Footer from '../Components/Footer'
import NavbottomFixed from '../Components/NavbottomFixed'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../Components/Landingpage.css"
import  "../Pages/StaffAgument.css"


const StaffAgumentation = () => {
    return (
        <div>




            {/* <section className='talent_banner banner_overlay position-relative ' style={{background:'#000'}}>
    <div className='banner_content text-center'>
        <h2>Staff Augmentation </h2>
        <p>Defining your business goals and finding the perfect talent for you</p>
    </div>
 </section> */}
 
 <div className='mt-5' >
                     
                     <nav aria-label="breadcrumb"  style={{marginTop:'100px',marginLeft:'100px'}}>
                         <ol class="breadcrumb">
                             <li class="breadcrumb-item"><Link className='text-decoration-none text-dark' to="/">Home</Link></li>
                             <li class="breadcrumb-item"><Link  className='text-decoration-none text-dark' to="/">Talent Solutions</Link></li>
                             <li class="breadcrumb-item active" aria-current="page"><Link className='text-decoration-none text-dark' to="/staff">Staff_Agumentation</Link></li>
                         </ol>
                     </nav>
                 </div>
     

            <div className='container-lg'>
                <div className='row  mb-5 master_craft'>
                    <h2 className='make_an_impact pt-5 '> Masters of our craft </h2>
                    <p className='make_an_impact_para'>We have provided  Staff Augmentation Solutions to countless Fortune 500 and Global 1000 organizations over the past 25 years.</p>
                </div>
             
                <div className='container-sm'>
                <div className='row impact'>
                    <div className='col-sm-12 col-md-6 ' style={{ marginTop: '-30px' }}>
                        <div ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-1.png" alt="Card image" /></div>
                        <div className=' d-flex flex-column '>
                            <div className='finance_staff'>Dedicated Account Management Model</div>
                            <div className='faster_staff'>Our goal is to maintain a high quality and customer-focused engagement model. We get to know our clients, their culture, and what works for them to provide the right talent.</div>
                        </div>
                     </div>

                    <div className='col-sm-12 col-md-6 '>
                            <div className='mt-5' ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-1-1.png" alt="Card image" /></div>
                            <div className=' d-flex flex-column '>
                                <div className='finance_staff'>Domain and Skill Specific Recruiting</div>
                                <div className='faster_staff ml-5 '>With experience across the board, our team supports clients in all kinds of industries. From financial services and banking, to insurance as well as healthcare and life sciences, technology and telecom, we can help.</div>
                            </div></div>                 

                    <div className=' col-sm-12 col-md-6 ' style={{ marginTop: '30px' }}>
                        <div ><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-2.png" alt="Card image" /></div>
                        <div className=' d-flex flex-column '>
                            <div className='finance_staff'>High Employee Retention</div>
                            <div className='faster_staff'>We take care of our people because we care! We pay attention to the little things and provide outstanding employee care throughout their journey from the day an offer is made.</div>
                            </div>
                    </div>

                    <div className='col-sm-12 col-md-6 '>
                        <div className='mt-5'><img className='w-75' src="https://collabera.com/wp-content/uploads/2022/12/Rectangle-169-3.png" alt="Card image" /></div>

                        <div className=' d-flex flex-column'>
                            <div className='finance_staff'>Coverage Across North America</div>
                            <div className='faster_staff mb-5'>With over 25 years of experience supporting Fortune 500 companies across the US and Canada, we are regarded as a pioneer in the staff augmentation industry.</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
<section className='Talent_skills'>
    <div  className='container container-lg'>
    <div className='row'>
        <div className='col-md-6 col-sm-10'>
            <h2>Digital Talent Solutions</h2>
            <p>Alchemy Solutions is a pioneer in professional talent solutions. Since 1996, we have helped Fortune 500 and mid-size clients achieve their business goals by providing high quality digital talent globally. Our clients love our staff augmentation model. We also dedicate ourselves to inclusive hiring strategies that promote diversity.</p>
        </div>
        <div className='col-md-6 col-sm-10'>
            <img className='w-100' alt=" Demand Maste " src='https://collabera.com/wp-content/uploads/2023/04/Group-7-1.png'/>
        </div>
    </div>
    </div>
  
</section>
<section  className='professional_slick'>
 <div className='container container-lg'>
    <h2>Professional Talent Across Industries and Roles</h2>
    <p className='pb-5'>With a deep understanding of our client’s business needs areas, extensive resources, and a client people focused approach, Alchemy Solutions has developed specialized recruiting teams who provide resources in various areas in the following categories:</p>
    <div>    </div>
 </div>
</section>



            <Footer />
            <NavbottomFixed />
        </div>
    )
}

export default StaffAgumentation