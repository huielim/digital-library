import { Link } from "react-router-dom";
import { Modal } from "./modal";
import fetchBook from "../Book";
import { useState } from "react";

const bookData = await fetchBook("http://localhost:3000/api/books");

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-screen nav-bar space-x-3">
      <Modal
        align="center"
        heading="Hui Eng's Library"
        subtext={
          <div className="flex-col place-items-center justify-center font-roboto-italic">
            <p className="text-lg ">Currently Reading:</p>
            <div className="pt-4 flex justify-center">
              <img className="w-[20%]" src={bookData.docs[0].cover} />
            </div>
            <p className="pt-4 font-roboto-semi-bold">
              {bookData.docs[0].title}
            </p>
          </div>
        }
        buttonText="Browse Books"
        onClick={() => setShowModal(false)}
        showModal={showModal}
      />

      <div className="nav-button font-roboto-medium">
        <Link to={"/"}>Shelved</Link>
      </div>

      <div className="nav-button font-roboto-medium">
        <Link to={"/read"}>Read Books</Link>
      </div>

      <div className="nav-button font-roboto-medium">
        <Link to={"/wishlist"}>Wishlist</Link>
      </div>
      <div className="font-roboto-medium">
        <button className="nav-button" onClick={() => setShowModal(true)}>
          Currently Reading
        </button>
      </div>
    </div>
  );
};
