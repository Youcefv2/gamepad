import MiniLogo from '../img/minilogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Signup() {
    console.log('Signup')
    return (
      <div className='signup'>
        <img src={MiniLogo} alt="" />
          <div className="left">
            <h2>How it works ?</h2>
            <div><FontAwesomeIcon icon={faUser} /><p> Log in to your free account to be able to get all features of Gamepad</p></div>
            <div><FontAwesomeIcon icon={faBookmark} /><p>Add a game to your collection</p></div>
            
            <div><FontAwesomeIcon icon={faMessage} /><p>Leave a review for a game</p></div>
            
          </div>
          <div className="right">
            <h2>Sign Up</h2>
            <form action="">
              <input type="text" name="" id="" placeholder='Username'/>
              <input type="text" name="" id="" placeholder='Email'/>
              <input type="text" name="" id="" placeholder='Password'/>
              <input type="text" name="" id="" placeholder='Confirm Password'/>
              <input type="file" name="" id="" accept="image/png, image/jpeg"/>
              <input type="submit" name="" id="" />
            </form>
          </div>
      </div>
        );
      }

export default Signup;