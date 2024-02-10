import React, { useState } from "react";  
import { useEffect,} from "react";
import axios from "axios";

function App(){
  const[state,setState] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})

    .then(response =>{
     const Books = response.data.books 
      setState(Books)
    console.log(Books)
  })

    .catch(error => {
      if(error.response.status === 404){
        console.log("Status Code: 404")
        console.log("Website not found")
      }
    })
  
  },[])

  return(
    <div>

      {
        state.map(function(ele,ind){
          return(
          <div key={ind}>
            <h1>
              {ele.title}
            </h1>
            <div className="box">
            <img src={ele.imageLinks.smallThumbnail} alt={ele.title} />
            <p>
              {ele.description}
            </p>
            </div>
            
            <h3>
              {ele.authors}
            </h3>

            <hr />
            
            </div>)
        })
      }


    </div>
  )
}

export default App