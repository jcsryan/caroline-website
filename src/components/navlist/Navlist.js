import React from "react";
import Logo from '../Assets/Logo 1 Transparent.png'

function Navlist(props) {
    const tabs = ['Home','Why Telehealth', 'Contact', 'About Me']
    return(
        <div className="navpic">
        <img src={Logo} className="logo1"></img>
        <ul className='navlist' >
            {tabs.map(tab => (
                <li className="nav-list" key={tab}>
                    <button id="nav-list-a" href={'#' + tab}
                    onClick={()=> props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    >
                     <span className="testing"> {tab} </span>
                    </button>
                </li>
            ))}
        </ul>
        </div>

    )
}

export default Navlist;