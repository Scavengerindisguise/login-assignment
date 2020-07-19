import React from 'react';
import MenuBar from '../components/navbar';


const CompanyInfo = () => {
    return (<React.Fragment>
        <MenuBar />
        <div className="row justify-content-center mt-5">
        <div className='col-md-6'>
            <div className="card">
                <div className="row p-2">
                    <div className="col-md-12 text-center align-self-center">
                        <p><b>Company</b>: Geeksynergy Technologies Pvt Ltd </p><p><b>Address</b>: Sanjayanagar , Bengaluru-56 </p><p><b>Phone</b>: XXXXXXXXX09 </p><p><b>Email</b>: XXXXXX@gmail.com </p>
                    </div>
                </div></div>
        </div>
        </div></React.Fragment>)
}

export default CompanyInfo;