const books = [
    {
      ISBN: "12345Book",
      title: "Tesla!!!",
      pubDate: "2021-08-05",
      language: "en",
      numPage: 250,
      author: [1,2],
      publications: [1],
      category: ["tech","space","education"]
    }
  ]
  
  const author = [
    {
      id: 1,
      name: "mitang",
      books: ["12345Book", "secretBook"]
    },
    {
      id: 2,
      name: "Elon Musk",
      books: ["12345Book"]
    }
  ]
  
  const publication = [
    {
      id: 1,
      name: "jadoo",
      books: ["12345Book"]
    }
  ]
  module.exports = {books , author , publication};

  