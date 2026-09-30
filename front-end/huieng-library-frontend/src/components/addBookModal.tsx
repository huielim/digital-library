import { useState } from "react";
import { getBook } from "../helper/getBook";
import { sendBook } from "../helper/sendBooktoPayload";

export type bookModalProps = {
  showModal: boolean;
}

export const AddBookModal = ({ showModal }: bookModalProps) => {
    const [isbn, setIsbn] = useState("");

    const handleSearch = async () => {
      if (isbn) {
        try {
        const book = await getBook(isbn);
    
        if (!book) {
          console.log("Book not found");
          return;
        }
        console.log(book);
        sendBook(book);
      } catch (error) {
        console.error(error);
      }
      }
    }



    return (
        <div className={`h-screen w-screen items-center flex justify-center modal-background ${
        !showModal && "hidden"
      }`}>
        <div
        className="bg-pink-400 rounded-xl modal shadow-2xl bounce p-10 flex justify-center items-center"
      >
        <div className="flex justify-center">
            <h1 className="font-roboto-bold pt-2 pb-4 text-3xl">Add Book</h1>
        </div>

        <div className="flex"> 
            <input className="bg-white" placeholder="Enter ISBN" onChange={(e) => setIsbn(e.target.value)}/>
        </div>

        <button className="button" type="button" onClick={handleSearch}>
              Search Book
            </button>
{/* 
            <button className="button" type="button" onClick={() => sendBook(book)}>
              Add Book
            </button> */}

        
</div>


      </div>
    )
}