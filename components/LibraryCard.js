import React, { useState, useEffect } from "react";

import firebaseClient from "../firebaseClient";
import StarRatingComponent from 'react-star-rating-component';


function LibraryCard({item}) {
    firebaseClient();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(parseInt(item.data.rating));
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [disableEdit, setDisableEdit] = useState(true);

    return (
        <div key={item.id} className="libraryCard">
            <div className="libraryThumbnail">
                <img src={item.data.image} />
            </div>
            <div className="libraryBody">
                <div>
                    <h2 style={{textAlign:'center'}}>{item.data.title}</h2>
                    <h3 style={{textAlign:'center'}}>{item.data.author}</h3>
                    <div style={{width: '100%', height: '2px', backgroundColor:'teal', marginTop:'1rem'}}></div>
                </div>
                <div>
                    <div>Genre</div>
                    <input className={'libraryInput'} defaultValue={item.data.genre} onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div>
                    <div>Pages</div>
                    <input className={'libraryInput'} defaultValue={item.data.pages} disabled={disableEdit} />
                </div>
                <div>
                    <div>Started</div>
                    <input className={'libraryInput'} type="date" defaultValue={item.data.startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <div>Finished</div>
                    <input className={'libraryInput'} type="date" defaultValue={item.data.endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div>
                    <div>My Rating</div>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={rating}
                        onStarClick={(nextValue, prevValue, name) => setRating(nextValue)}
                    />
                </div>
                <div>
                    <div>Global Rating</div>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={parseInt(item.data.globalRating)}
                    />
                </div>
                <div>
                    <textarea className="libraryDescription" defaultValue={item.data.review} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignContent:'center'}}>
                    <button className="libraryUpdate">Update</button>
                    <button className="libraryEdit" onClick={() => setDisableEdit(false)}>Edit</button>
                    {
                        item.data.endDate != '' ?
                            <div>FINISHED</div>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default LibraryCard;