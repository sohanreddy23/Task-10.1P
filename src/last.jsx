import React from 'react';
import './last.css'

function Last(props){
    return(
        <div className="container">
      <div className="section">
        <div className="heading">For Dev</div>
        <div className="buttons">
          <button className="button">How it works</button>
          <button className="button">How to create a profile</button>
          <button className="button">Find jobs</button>
        </div>
      </div>
      <div className="section">
        <div className="heading">For Clients</div>
        <div className="buttons">
          <button className="button">How it works</button>
          <button className="button">How to post a job</button>
          <button className="button">Find dev</button>
        </div>
      </div>
      <div className = 'section'>
      <div className="heading">Stay Connected</div>
      <img src={ require('/Users/sohanreddy/task-4.1p/src/img02.jpeg') } alt='' width ='150' height='150'/>
    </div>
      <div className="section">
                <div >DEVlink</div>
                <div>
                    <button className="button">Privacy Policy</button>
                    <button className="button">Terms</button>
                    <button className="button">Code of Conduct</button>
                </div>
            </div>
    </div>
    )
}
export default Last ;