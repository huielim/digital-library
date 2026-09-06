


async function fetchBook(url: string) {
  try{
    const response = await fetch(url)
    if (!response.ok){
      throw new Error("Couldn't fetch resource");
    }
    const data = await response.json()

    console.log(data)

    return data
  }
  catch(error){
    console.error(error)
  }
}



export default fetchBook;