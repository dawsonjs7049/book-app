import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

function Banner(props){

    let { handleLogout } = props;

    return (
        <div className={'bannerContainer'}>
            <div className={'bannerName'}>
                Jake's Bookshelf <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <button type="submit" className={'logoutBtn'} onClick={() => handleLogout()}>Logout</button>
        </div>
    )


}

export default Banner;