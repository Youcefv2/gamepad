import MiniLogo from '../img/minilogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import "../style/connection.css"

function Signup() {
    console.log('Signup')
    return (
      <div className='signup'>
        
          <div className="left">
          <img src={MiniLogo} alt="" />
            <h2>How it works ?</h2>
            <div>
            <div className='icon'><FontAwesomeIcon icon={faUser} /></div>
              <p> Log in to your free account to be able to get all features of Gamepad</p>
            </div>
            <div>
              <div className='icon'><FontAwesomeIcon icon={faBookmark} /></div>
              <p>Add a game to your collection</p>
            </div>
            <div>
              <div className='icon'><FontAwesomeIcon icon={faMessage} /></div>
              <p>Leave a review for a game</p>
            </div>
          </div>
          <div className="right">
            <h2>Sign Up</h2>
            <form action="">
              <input className='register' type="text" name="" id="" placeholder='Username'/>
              <input className='register' type="text" name="" id="" placeholder='Email'/>
              <input className='register password' type="text" name="" id="" placeholder='Password'/>
              <input className='register password' type="text" name="" id="" placeholder='Confirm Password'/>
              <label for="file-upload" class="custom-file-upload">
              Add a Photo <FontAwesomeIcon icon={faUpload} />
              </label>
              <input className='import' type="file" name="" id="file-upload" accept="image/png, image/jpeg"/>
              <input className='btnConnexion' type="submit" name="" id="" value="Sign up" />
            </form>
          </div>
      </div>
        );
      }

export default Signup;