import React from "react";
import { useEffect,useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Book from "../../components/Book/Book";


const BookDetails = ({book}) => {
    const [bookDetails, setBookDetails] = useState("");

    useEffect(()=>{
        displayBookDetails()}, []);
    

    const displayBookDetails = async () => {
        try{
            let response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/${book.id}`
            );
            setBookDetails(response.data)
            console.log(response)
        }catch (error){
            console.log(error.response);
        }
    }

    return ( 
        <div>
            {/* <div>{bookDetails.imageLinks.smallThumbnail}</div> */}
            <div>{bookDetails.title}</div>
            <div>{bookDetails.authors}</div>
            <div>{bookDetails.description}</div>
        </div>
     );
}
 
export default BookDetails;