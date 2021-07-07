import React, { useState } from 'react';

import axios from 'axios';


function BookSearch(props) {
 
    const [search, setSearch] = useState('');
    const [cards, setCards] = useState([]);

    let { setSelectedBook, setShowAddBookModal } = props;


        
    const handleSearch = () => {
        if(search !== '')
        {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5`)
                .then(res => {
                    console.log(res.data);
                    setCards(res.data.items);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    const handleAddBook = (item) =>
    {
        setSelectedBook(item);
        setShowAddBookModal(true);
    }

    return (
        <div className="bookSearch">

            <div className="bookSearchInputs">
                <input type="text" placeholder="Search by title..." className="bookSearhInput" onChange={(e) => setSearch(e.target.value)}></input>
                <button type="submit" className="bookSearchBtn" onClick={() => handleSearch()}>Search</button>
            </div>
    
            <div className={"bookSearchCardContainer"}>
                {
                    cards.length > 0 &&
                        cards.map((item) => (
                            <div className={"searchCard"} key={item.id}>
                                <img className="thumbnail" src={item.volumeInfo.imageLinks.thumbnail} />
                                <div className="bookSearchDetailsContainer">
                                    <div className={'title'}>{item.volumeInfo.title}</div>
                                    <div>{item.volumeInfo.authors[0] ? item.volumeInfo.authors[0] : ''}</div> 
                                    <div>Average Rating: {item.volumeInfo.averageRating}</div>
                                    <div>Pages: {item.volumeInfo.pageCount}</div>
                                    <div>Genre: {item.volumeInfo.categories ? item.volumeInfo.categories[0] : ''}</div>
                                    <div style={{width: '85%', height: '1.5px', backgroundColor: 'teal'}}></div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', width: '100%'}}>
                                        <a style={{width: '40%'}}href={item.volumeInfo.infoLink} target="_blank"><button className={"infoLink"}>More Info</button></a>
                                        <button className={"addLibraryBtn"} onClick={() => handleAddBook(item)}>Add +</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
      </div>
    )
}

export default BookSearch;