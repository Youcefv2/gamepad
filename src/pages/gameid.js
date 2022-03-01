import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import '../grid.css'


function Gameid() {
    console.log('Gameid')
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams().gameid
    const apiKey = process.env.REACT_APP_UNSPLASH_KEY
    useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://api.rawg.io/api/games/"+ param + "?key=" + apiKey);
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
    }
    let genres
    const getGenre = () => {
      for (let i = 0; i < data.genres.length; i++) {
        if(i === 0){
          genres = data.genres[i].name
        }else{genres = genres + ", " + data.genres[i].name}
      }
    }
    let devs = ""
    const getDevs = () => {
      for (let i = 0; i < data.developers.length; i++) {
        if(i === 0){
          devs = data.developers[i].name
        }else{devs = devs + ", " + data.developers[i].name}
      }
    }
    let publishers = ""
    const getPublishers = () => {
      for (let i = 0; i < data.publishers.length; i++) {
        if(i === 0){
          publishers = data.publishers[i].name
        }else{publishers = publishers + ", " + data.publishers[i].name}
      }
    }
    let ageRating = ""
    const getAgeRating = () => {
      if(data.esrb_rating === null){
        ageRating = ""
      }else{
        ageRating = data.esrb_rating.name
      }
    }
    let reviewsList = []
    let review
    if(reviewsList < 1){review = "No review for this game !"}
    if (isLoading === false){getPlatforms()}
    if (isLoading === false){getDevs()}
    if (isLoading === false){getGenre()}
    if (isLoading === false){getPublishers()}
    if (isLoading === false){getAgeRating()}
    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='container'>
        <h1 className='listTitle'>{data.name}</h1>
        <div className="parent">
          <div className="div10"><img width="100%" height="100%" src={data.background_image} alt="" /></div>
          <a href="/remark" className="btn"><div className="div1">Save to Collection <FontAwesomeIcon icon={faBookmark} /></div></a>
          <a href="/favorite" className="btn"><div className="div2">Add a Review <FontAwesomeIcon icon={faMessage} /></div></a>
          <div className="div3 info"><span className="title-info"> Plateforms :</span> <br/> {platforms}
          </div>
          <div className="div4 info"><span className="title-info"> Genre :</span> <br/>{genres}</div>
          <div className="div5 info"><span className="title-info"> Released date :</span>  <br/>{data.released}</div>
          <div className="div6 info"><span className="title-info"> Developer :</span> <br/>{devs}</div>
          <div className="div7 info"><span className="title-info"> Publisher :</span> <br/>{publishers}</div>
          <div className="div8 info"><span className="title-info"> Age rating :</span> <br/>{ageRating}</div>
          <div className="div9 about"><span className="title-info"> About :</span> <br/>{data.description_raw}</div>
        </div>
        <div>
          <h2>Games like {data.name} :</h2>
        </div>
        <div>
          <h3>Reviews</h3>
          <p className="review">{review}</p>
        </div>
      </div>
  );
}

export default Gameid;