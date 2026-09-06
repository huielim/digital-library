import fetchBook from "../Book";
import BookCard from "../components/bookCard";
import { NavBar } from "../components/navbar";

// const bookData = await fetchBook(
//   "https://openlibrary.org/books/OL26975567M.json"
// );

const bookData = await fetchBook("http://localhost:3000/api/books");

const readBooks = bookData.docs.filter((b) => b.read);

const FinishedBooks = () => {
  return (
    <div className="w-screen h-screen flex-col justify-center items-center p-6">
      <NavBar />

      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1justify-center content-center pt-50 gap-4">
        {readBooks.map((b) => (
          <BookCard
            key={b.id}
            title={b.title}
            author={b.author}
            cover={b.cover}
            description={b.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FinishedBooks;
