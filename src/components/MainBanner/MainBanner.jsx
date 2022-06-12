import React from 'react'
import './MainBanner.css'
import bannerImage from '../../assets/images/banner.png'

const MainBanner = () => {

    return(
        <div className='main-banner-block'>
            <div className='banner-block' style={{ backgroundImage: `url('${bannerImage}')` }}>
            </div>
        </div>
        
    )
}

export default MainBanner