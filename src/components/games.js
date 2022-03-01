import axios from 'axios';
import { useState, useEffect } from "react";

function Games() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_UNSPLASH_KEY
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://api.rawg.io/api/games?key=" + apiKey);
          setData(response.data);
          setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='liste'>
        <h1 className='listTitle'>Most Relevance Games</h1>
          {data.results.map(result => {
                    return (
                        <a href={'/game/'+ result.id}>
                        <ul key={result} >
                            <li className='gameTitle'>{result.name}</li>
                            <img src={result.background_image} alt="game_picture" />
                        </ul>
                        </a>);
                    })}
      </div>
  );
}

export default Games;
