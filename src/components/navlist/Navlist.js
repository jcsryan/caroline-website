import React from "react";


function Navlist(props) {
    const tabs = ['Main','Why', 'Get in Touch', 'About']
    return(
        <div className="navpic">
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