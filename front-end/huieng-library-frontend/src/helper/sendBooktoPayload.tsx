

export type GetBook = {
    isbn: string;
    title: string;
    // description?: string;
    author: string;
    cover?: string;
}


export const sendBook = async (Book: GetBook) => {
  try {
    const response = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: Book.isbn,
        title: Book.title,
        author: Book.author,
        cover: Book.cover,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create book');
    }

    const result = await response.json();
    console.log('Book created:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}