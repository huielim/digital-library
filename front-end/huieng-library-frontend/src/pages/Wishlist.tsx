import fetchBook from "../Book";
import BookCard from "../components/bookCard";
import { NavBar } from "../components/navbar";

const bookData = await fetchBook(
  "https://openlibrary.org/books/OL51045144M.json"
);

const Wishlist = () => {
  return (
    <div className="w-screen h-screen flex-col justify-center items-center">
      <NavBar />

      <div className="flex justify-center  pt-50">
        <BookCard
          title="The God of the Woods"
          author="Liz Moore"
          image={`https://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg`}
        />
      </div>
    </div>
  );
};

export default Wishlist;
