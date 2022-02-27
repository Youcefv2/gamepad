import '../App.css';
import Logo from "../img/logo.png"


function Search() {
  let handleSubmit = (event) => {
    document.location.href="../../search/game/"+event.target[0].value;
    event.preventDefault();
    }

    return (
      <div>
        <div className='search'>
          <img src={Logo} alt="" className='logo'/>
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Search for a game...'/>
          <input className='searchBtn' type="submit" />
          </form>
          <p>Search 2 349 595 games</p>
        </div>
      </div>
  );
}

export default Search;