
export type GetBook = {
    isbn: string;
    title: string;
    // description?: string;
    author: string;
    cover?: string;
}

export async function getBook(isbn: string): Promise<GetBook | null> {
  const response = await fetch(
    `https://openlibrary.org/search.json?isbn=${encodeURIComponent(isbn)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }

  const data = await response.json();

  if (!data.docs || data.docs.length === 0) {
    return null;
  }

  const book = data.docs[0];

  return {
    isbn,
    title: book.title,
    // description: book.subtitle || undefined,
    author: book.author_name?.[0] ?? "Unknown author",
    cover: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : undefined,
  };
}