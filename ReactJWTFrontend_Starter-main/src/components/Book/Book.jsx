
import React, { useState } from 'react';


const Book = ({books, searchForBooks}) => {

    const [bookCard, setBookCard] = useState("");
    
    function booksList(){
        searchForBooks().map();
    } 

    return ( 
        <div>
            <h1> Book Title Here </h1>
            <ul>   
            <li>{booksList}</li> 
            </ul>
        </div>
     );
}
 
export default Book;