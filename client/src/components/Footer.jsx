import React from 'react'
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>For buiness</h4>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
                </div>
                <div className='resources'div>
                <h4>For buiness</h4>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
                    <Link to='/employeer'>
                    <p>Employeer</p>
                    </Link>
            </div>
            <div className='sb__footer-links_div'>
                
            </div>
        </div>
      </div>
    </div>
  )
};
