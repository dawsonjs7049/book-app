import React from 'react';
import nookies from 'nookies';
import {verifyIdToken} from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

function Home({session})
{
    firebaseClient();

    const handleLogout = async () => {
        await firebase  
            .auth()
            .signOut();

        window.location.href = "/";
    }

    if(session)
    {
        return (
            <>
                <div>Hello There!</div>
                <button type="submit" onClick={() => handleLogout()}>Logout</button>
            </>
        )
    }
    else
    {
        return (
            <div>Loading</div>
        )
    }
}

export async function getServerSideProps(context)
{
    try{
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);

        const { uid, email } = token;

        return {
            props: { session: `Your email is ${email} and your UID is ${uid}.`},
        };
    }
    catch (error)
    {
        context.res.writeHead(302, {location: "/index"});
        context.res.end();

        return {
            props: []
        };
    }
}

export default Home;