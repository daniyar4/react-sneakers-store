
import { Link, NavLink } from "react-router-dom";
import'./Footer.css'
import logoCircle from '../../assets/images/logo-circle.png'


const Footer = () => {

    return(
        <div className="footer-main">
            <div className='footer-main-content'>
                <Link to='/' className='footer-logo-block'>
                    <img className='footer-logo-image' src={logoCircle} alt='Logo'/>
                    <span className='footer-store-name-text'>
                        SNEAKERS-STORE
                    </span>
                </Link>

                <div className='footer-main-info-block'>
                    <div className='footer-info-block'>
                        <span className='footer-headers-text'>О НАС</span>
                        <NavLink to='delivery-payment-info' className='footer-text'>Доставка</NavLink>
                        <NavLink to='delivery-payment-info' className='footer-text'>Оплата</NavLink>
                    </div>

                    <div className='footer-info-block'>
                        <span className='footer-headers-text'>FAQ</span>
                        <NavLink to='product-return' className='footer-text'>Политика обмена и возврата </NavLink>
                        <NavLink to='contacts' className='footer-text'>Контакты</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer