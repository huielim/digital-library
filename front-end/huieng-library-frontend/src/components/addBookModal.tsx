import { useState } from "react";
import { getBook } from "../helper/getBook";
import { sendBook } from "../helper/sendBooktoPayload";

export type bookModalProps = {
  showModal: boolean;
  onClose?: () => void;
};

export const AddBookModal = ({ showModal, onClose }: bookModalProps) => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState<any>(null);

  const handleSearch = async () => {
    if (isbn) {
      try {
        const book = await getBook(isbn);

        if (!book) {
          console.log("Book not found");
          return;
        }
        console.log(book);
        setBook(book);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className={`h-screen w-screen items-center flex justify-center modal-background ${
        !showModal && "hidden"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className="bg-pink-400 rounded-xl modal shadow-2xl bounce p-10 flex">
        <div className="flex-col space-y-4">
          <h1 className="font-roboto-bold pt-2 pb-4 text-3xl">Add Book</h1>
          {book && (
            <div className="flex-row space-y-3">
              <div>
                <h2 className="font-roboto-bold text-xl">{book.title}</h2>
                <p className="font-roboto-regular">{book.author}</p>
              </div>

              <img src={book.cover} />
              <p>{book.ISBN}</p>
              <div className="flex space-x-3">
                <button
                  className="button"
                  type="button"
                  onClick={() => {
                    setBook(null);
                    setIsbn("");
                  }}
                >
                  Clear
                </button>
                <button
                  className="button "
                  type="button"
                  onClick={() => sendBook(book)}
                >
                  Add Book
                </button>
              </div>
            </div>
          )}
          {/* {!book && (
            <div className="flex space-x-3  items-center">
              <h2 className="font-roboto-bold text-xl">Book not found</h2>
              <button
                className="button"
                type="button"
                onClick={() => {
                  setBook(null);
                  setIsbn("");
                }}
              >
                Clear
              </button>
            </div>
          )} */}
          <div className="flex justify-center space-x-3">
            <input
              className="bg-white rounded-xl pl-6"
              placeholder="Enter ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />

            <button className="button" type="button" onClick={handleSearch}>
              Search Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
