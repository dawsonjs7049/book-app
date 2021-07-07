import React, {useState} from 'react';
import nookies from 'nookies';
import {verifyIdToken} from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

import Banner from "../components/Banner";
import BookSearch from '../components/BookSearch';
import AddBookModal from '../components/AddBookModal';


function Home({session})
{
    firebaseClient();

    const uid = session.uid;
    const email = session.email;

    const [selectedBook, setSelectedBook] = useState();
    const [showAddBookModal, setShowAddBookModal] = useState(false);

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
            {console.log("UID: " + uid + " - EMAIL: " + email)}
             
                <Banner handleLogout={handleLogout} />
                <BookSearch setSelectedBook={setSelectedBook} setShowAddBookModal={setShowAddBookModal}/>
                <AddBookModal selectedBook={selectedBook} show={showAddBookModal} setShowAddBookModal={setShowAddBookModal}/>
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

// WHen you hover over search cards, have it expand to the side with a description of the book?

export async function getServerSideProps(context)
{
    try{
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);

        const { uid, email } = token;

        return {
            props: { session: {uid: uid, email: email }},
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