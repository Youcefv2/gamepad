import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"
import Search from "../components/search";

function Searchpage() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams().gamename
  const apiKey = process.env.REACT_APP_UNSPLASH_KEY
  useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('https://api.rawg.io/api/games?key=' + apiKey + '&search='+ param)
            setData(response.data);
            setIsLoading(false);
          } catch (error) {
            console.log(error.response);
          }
        };
        fetchData();
      }, []);
      let img 


return isLoading ? (
          <span>En cours de chargement...</span>
        ) : (
          <div>
          <Search/>
          <div className='liste'>
            
        <h1 className='listTitle'>Results for "{param}"</h1>
          {data.results.map(result => {
                    img = result.background_image;
                    if(img === null){
                      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                    }else{
                      img = result.background_image
                    }
                    return (
                      <a href={'/game/'+ result.id}>
                        <ul key={result} >
                            <li className='gameTitle'>{result.name}</li>
                            <img src={img} alt="game_picture" />
                        </ul>
                        </a>);
                    })}
      </div>
      </div>
      )
      
}

export default Searchpage;