import React from "react";

function Banner(props){

    let { handleLogout } = props;

    return (
        <div className={'bannerContainer'}>
            <div className={'bannerName'}>
                My Books
            </div>
            <button type="submit" className={'logoutBtn'} onClick={() => handleLogout()}>Logout</button>
        </div>
    )


}

export default Banner;