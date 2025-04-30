import React from 'react'
import '../../styles/footer.css'

const Footer = () => {
  return (
    <div className='footerwrap'>
       <div className='footerinner1'>
        <div className='footersocials'>
            <img src="https://womenintech.moniepoint.com/static/media/instagram.8a4603b4ebf0d2eb3863afefcae42c29.svg" alt="" />
            <img src="https://womenintech.moniepoint.com/static/media/twitter.b8117b25b0e6c6e5e9137fe6ac162a0d.svg" alt="" />
            <img src="https://womenintech.moniepoint.com/static/media/linkedln.f68b357155d8042edf5a22c745959cc6.svg" alt="" />
        </div>

        <div className='footerprivacy'>
            <h3>
                <u>Privacy Policy</u>
            </h3>
        </div>

        <div className='footerterms'>
            <h3>
                <u>Terms & Conditions</u>
            </h3>
        </div>
       </div>
       <div className='footerinner2'>
        <h3>©2025 Moniepoint Inc. All Rights Reserved</h3>
       </div>
    </div>
  )
}

export default Footer