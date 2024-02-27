import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [book, setBook] = useState();
  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((response) => response.json())
      .then((data) => {
        setBook(data.books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div>
        {book?.map((data) => (
          <div key={data.id} className="bookContainer">
            <h2>{data.title}</h2>
            <div className="book">
              <div>
                <img id="bookImg" src={data.imageLinks.thumbnail} alt="" />
              </div>
              <div>
                <p id="bookDes">{data.description}</p>
              </div>
            </div>
            <h3>{data.authors}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
