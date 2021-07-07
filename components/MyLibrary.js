import React, { useState } from "react"

function MyLibrary({books}) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [disableEdit, setDisableEdit] = useState(true);

    console.log("BOOKS" + JSON.stringify(books));
    return (
        <div className="libraryContainer">
            <div className="libraryCards">
            {
                books.length > 0 ?
                    books.map((item) => (
                        <div key={item.id} className="libraryCard">
                            <div className="libraryThumbnail">
                                <img src={item.data.image} style={{height: '100%', width: '100%'}} />
                            </div>
                            <div className="libraryBody">
                                <div>
                                    <div>Title</div>
                                    <input className={'libraryInput'} defaultValue={item.data.title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div>
                                    <div>Author</div>
                                    <input className={'libraryInput'} defaultValue={item.data.author} onChange={(e) => setAuthor(e.target.value)} />
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
                                    <input className={'libraryInput'} defaultValue={item.data.rating} onChange={(e) => setRating(e.target.value)} />
                                </div>
                                <div>
                                    <div>Global Rating</div>
                                    <input className={'libraryInput'} defaultValue={item.data.globalRating} />
                                </div>
                                <div>
                                    <textarea className="libraryDescription" defaultValue={item.data.review} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div>
                                    <button>Update</button>
                                    <button onClick={() => setDisableEdit(false)}>Edit</button>
                                    {
                                        item.data.endDate != '' ?
                                            <div>FINISHED</div>
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                
                :
                    "EMPTY"
            }
            </div>
        </div>
    );
}

export default MyLibrary;