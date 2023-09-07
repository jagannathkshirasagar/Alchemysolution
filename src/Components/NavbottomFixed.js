import React from 'react'
import "../Components/Landingpage.css"

const NavbottomFixed = () => {
  return (
    <div>
          <div className='container-fluid mt-5 '>
                <nav class="navbar fixed-bottom navbar-light d-flex flex-md-row flex-sm-column bg-light justify-content-between g-2 " style={{padding:'14px 25px'}}>

                    <div className='col-md-9 col-sm-12 footer_msg text-left ml-2 text-left'>We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.</div>
                    <div className='col-md-3 col-sm-12 d-flex justify-content-end align-items-center cookies_button'>
                        <a href='' type="button" class="btn btn-outline-secondary">Cookie setting</a>
                        <a href='' type='button' className='btn btn-success m-2' >Accept All</a>
                    </div>
                </nav>
            </div>
    </div>
  )
}

export default NavbottomFixed