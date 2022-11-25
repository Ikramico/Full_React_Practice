import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';





function Header(){
    return (
        <>
<div className="banner">
    <div className="row">
        <div className="bg-img col-1">
        <div className="headline">
            <p className="sub-head">Get Organized</p>
            <h3 className="moto">All Your Activities In One Place</h3>
            <button className="learn">Learn More</button>
        </div>
    </div>
    <div className="slider">
        <div className="slider-row">
            <button className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src="#" alt="screen-1" className="slider-img" />
            <button className="arrow">
            <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        
    </div>
    </div>
    
</div>
</>
    )
}
export default Header;
