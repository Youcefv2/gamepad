import MiniLogo from '../img/minilogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Connection() {
    console.log('page inscription')
    return (
    <div className='connection'>
      <img src={MiniLogo} alt="" />
        <div className="left">
          <h2>How it works ?</h2>
          <div><FontAwesomeIcon icon={faUser} /><p> Log in to your free account to be able to get all features of Gamepad</p></div>
          <div><FontAwesomeIcon icon={faBookmark} /><p>Add a game to your collection</p></div>
          
          <div><FontAwesomeIcon icon={faMessage} /><p>Leave a review for a game</p></div>
          
        </div>
        <div className="right">
          <h2>Login</h2>
          <form action="">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="submit" name="" id="" />
            <a href="/signup">Don’t have an account yet ?</a>
          </form>
        </div>
    </div>
  );
}

export default Connection;
