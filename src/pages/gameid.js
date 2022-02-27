import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import '../grid.css'


function Gameid() {
    console.log('Gameid')
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams().gameid
    useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://api.rawg.io/api/games/"+ param + "?key=1a5199e7183e49b996f75abb1b1896b5");
          setData(response.data);
          setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    let platforms = ""
    const getPlatforms = () => {
      for (let i = 0; i < data.platforms.length; i++) {
        if(i === 0){
          platforms = data.platforms[i].platform.name
        }else{platforms = platforms + ", " + data.platforms[i].platform.name}
      }
      console.log(platforms)
    }
    if (isLoading === false){getPlatforms()}
    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='container'>
        <h1 className='listTitle'>{data.name}</h1>
        <div className="parent">
          <div className="div10"><img width="300px"src={data.background_image} alt="" /></div>
          <div className="div1">add</div>
          <div className="div2">save</div>
          <div className="div3">Platforms : <br/> {platforms}
          </div>
          <div className="div4">Genre</div>
          <div className="div5">date</div>
          <div className="div6">dev</div>
          <div className="div7">Publisher</div>
          <div className="div8">Age rating</div>
          <div className="div9">About</div>
        </div>
      </div>
  );
}

export default Gameid;