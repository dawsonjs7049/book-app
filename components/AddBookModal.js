import React, { useState, useEffect } from "react"


function AddBookModal({selectedBook}){

    let myImage, myTitle, myAuthor, myRating, myGenre;
    if(selectedBook)
    {
        myImage = selectedBook.volumeInfo.imageLinks.thumbnail;
        myTitle = selectedBook.volumeInfo.title;
        myAuthor = selectedBook.volumeInfo.authors[0] ? selectedBook.volumeInfo.authors[0] : '';
        myRating = selectedBook.volumeInfo.averageRating;
        myGenre = selectedBook.volumeInfo.categories ? selectedBook.volumeInfo.categories[0] : '';
    }

    const [image, setImage] = useState(selectedBook ? (selectedBook.volumeInfo.imageLinks.thumbnail) : '');
    const [title, setTitle] = useState(selectedBook ? (selectedBook.volumeInfo.title) : '');
    const [author, setAuthor] = useState(selectedBook ? (selectedBook.volumeInfo.authors[0] ? selectedBook.volumeInfo.authors[0] : '') : '');
    const [rating, setRating] = useState(selectedBook ? (selectedBook.volumeInfo.averageRating) : '');
    const [genre, setGenre] = useState(selectedBook ? (selectedBook.volumeInfo.categories ? selectedBook.volumeInfo.categories[0] : '') : '');
    const [description, setDescription] = useState('');

    console.log("SELECTED BOOK: " + (selectedBook ? (JSON.stringify(selectedBook)) : ''));

    return (
   
        <div className={'addBookModalContainer'}>
            <h2>Add Book to your Library</h2>
            <hr></hr>
            <div className={'bookModalInputsContainer'}>
                <div style={{width: '50%'}}>
                    <img className={'bookModalThumbnail'} src={myImage} />
                </div>
                <div className={'bookModalInputs'}>
                    <div>
                        <div>Title</div>
                        <input className={'bookModalInput'} value={myTitle} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <div>Author</div>
                        <input className={'bookModalInput'} value={myAuthor} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div>
                        <div>Genre</div>
                        <input className={'bookModalInput'} value={myGenre} onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <div>
                        <div>Rating</div>
                        <input className={'bookModalInput'} value={myRating} onChange={(e) => setRating(e.target.value)} />
                    </div>
                </div>
                
            </div>
            <div>
                <div style={{textAlign: 'left', fontWeight: 'bold', marginTop: '2rem'}}>
                    Review
                </div>
                <textarea className={'bookModalDescriptionInput'} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className={'bookModalButtonContainer'}>
                <button className="bookModalSaveButton">Save</button>
                <button className="bookModalCancelButton">Cancel</button>
            </div>
        </div>
    );
}

export default AddBookModal;