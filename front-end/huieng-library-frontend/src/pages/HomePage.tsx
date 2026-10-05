import { NavBar } from "../components/navbar";
import fetchBook from "../Book";
import BookCard from "../components/bookCard";

const bookData = await fetchBook("http://localhost:3000/api/books");
const books = bookData.docs;
const libCount = books.length;

console.log("no of books:", libCount);

export const HomePage = () => {
  return (
    <div className="h-screen w-screen p-6">
      <NavBar />

      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1justify-center content-center pt-50 gap-4">
        {books.map((b) => (
          <BookCard
            key={b.id}
            title={b.title}
            author={b.author}
            cover={b.coverURL}
            description={b.description}
          />
        ))}
      </div>
    </div>
  );
};
