import React, { useState } from "react";

import StarRatingComponent from 'react-star-rating-component';
import LibraryCard from "../components/LibraryCard";

function MyLibrary({books}) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [disableEdit, setDisableEdit] = useState(true);
    
    // HAVE TO MAKE THIS ITS OWN COMPONENT (EACH LIBRARY CARD) SO WE CAN UPDATE FIREBASE WITHIN THAT File, CANT DO IT HERE

    console.log("BOOKS" + JSON.stringify(books));
    return (
        <div className="libraryContainer">
            <h1 style={{width: '100%', textAlign:'center', color: 'white'}}>My Library</h1>
            <div className="libraryCards">
            {
                books.length > 0 ?
                    books.map((item) => (
                        <LibraryCard item={item} key={item.id}/>
                    ))
                
                :
                    "EMPTY"
            }
            </div>
        </div>
    );
}

export default MyLibrary;