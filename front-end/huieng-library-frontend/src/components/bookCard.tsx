import { useState } from "react";
import { Modal } from "./modal";

export type BookCardProps = {
  title: string;
  author: string;
  cover?: string;
  description?: string;
};

const BookCard = ({ title, author, cover, description }: BookCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        align="left-align"
        heading={title}
        subtext={
          <>
          <div className="font-roboto-medium-italic"> {author}</div>
          <div className="font-roboto-medium-italic"> {description}</div></>
        }
        buttonText="Close"
        onClick={() => setShowModal(false)}
        showModal={showModal}
      />
      <div className="bg-pink-400 p-10 rounded-xl flex-col justify-center content-center h-full w-full">
        <div className="flex justify-center">
          <img className="book-image" src={cover} />
        </div>

        <p className="font-roboto-bold text-xl pt-5 text-center">{title}</p>
        <p className="font-roboto-medium-italic pt-1 text-center">{author}</p>

        <div className="pt-5 flex justify-center">
          <button
            className="button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
