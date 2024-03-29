import React, { useState } from 'react'
import axios from 'axios'
function App() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>Top Headlines</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Go To Website</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;