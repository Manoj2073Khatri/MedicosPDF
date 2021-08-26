
import React, { useState,useEffect } from 'react'
import './_signUp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagramSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons'
// import fire from '../firebase'

import  firebase from "firebase";
import "firebase/auth"



const SignUp = () => {


    const [toggle, setToggle] = useState(false);
    const [user, setUser]= useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    // const [hasAccount,setHasAccount]=useState('');
   
    
  
  
    const handelEmail=(e)=>{
        setEmail(e.target.value)
        }
        const handelPassword=(e)=>{
            setPassword(e.target.value)
        }
    const handelLogin=(e)=>{
        console.log(email,password)
        e.preventDefault()
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(res=>{console.log(res)})
        .catch ((err)=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
            }
        });
    };
    const handelSignUp=(e)=>{
        console.log(email,password)
        e.preventDefault()
        firebase 
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res=>{console.log(res)})
        .catch ((err)=>{
            console.log(err)
            switch(err.code){
                case "auth/invalid-email":
                case "auth/email-in-use":
               
                    setEmailError(err.message);
                    break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
            }
        });
    };

    const handleGoogleLogin=(e)=>{
        e.preventDefault()
        const prov = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(prov)
  .then((result) => {
    const credential = result.credential;

   
    const token = credential.accessToken;
  
    const user = result.user;
    
  }).catch((error) => {
  
    console.log(error);
  });
    }
  
    const authListener=()=>{
       try{
        firebase
        .auth()
        .onAuthStateChanged((user)=>{
            if (user){
                setUser(user);
            }
            else{
                setUser('');
            }
        });
       }
       catch(err){
           console.log(err)
       }
    };
    useEffect(() => {
         authListener();
    }, [])
  

    return (
        <div className="WholeContainer">
            <div className='WholeContainer-wrapper'>
                <div className={`formContainer sign-in-container ${toggle ? 'sign-in-container-right-active' : ''} `}>

                    <form>
                        <h1>Sign in</h1>
                        <div className="sign-in-container-icons">
                            <FontAwesomeIcon icon={faFacebook} className="sign-in-container-icons-icon1" />
                            <FontAwesomeIcon icon={faInstagramSquare} className="sign-in-container-icons-icon2" />
                            <FontAwesomeIcon icon={faTwitter} className="sign-in-container-icons-icon3" />
                            <FontAwesomeIcon onClick={handleGoogleLogin} icon={faGoogle}/>
                        </div>
                        <span>or use your account</span>
                        <div className="sign-in-container-email">
                            <FontAwesomeIcon icon={faEnvelope} className="sign-in-container-email-icon" />
                            <input type="email" placeholder="Email" onChange={handelEmail} value={email} />
                        </div>

                        <div className="sign-in-container-password">
                            <FontAwesomeIcon icon={faUnlock} className="sign-in-container-password-icon" />
                            <input type="password" placeholder="Password" onChange={handelPassword} value={password} />
                        </div>

                        <a href="#">Forgot your password?</a>

                        <button onClick={handelLogin}>Sign In</button>
                    </form>


                </div>


                <div className={`formContainer sign-up-container ${toggle ? 'sign-up-container-right-active' : ''} `}>
                    <form >
                        <h1>Create Account</h1>
                        <div class="sign-up-container-icons">
                            <FontAwesomeIcon icon={faFacebook} className="sign-up-container-icons-icon1" />
                            <FontAwesomeIcon icon={faInstagramSquare} className="sign-up-container-icons-icon2" />
                            <FontAwesomeIcon icon={faTwitter} className="sign-up-container-icons-icon3" />
                        </div>
                        <span>or use your email for registration</span>
                        <div className="sign-up-container-name">
                            <FontAwesomeIcon icon={faUser} className="sign-up-container-name-icon" />
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="sign-up-container-email">
                            <FontAwesomeIcon icon={faEnvelope} className="sign-up-container-email-icon" />
                            <input type="email" placeholder="Email" onChange={handelEmail} value={email} />
                        </div>
                        <div className="sign-up-container-password">
                            <FontAwesomeIcon icon={faUnlock} className="sign-up-container-password-icon" />
                            <input type="password" placeholder="Password" onChange={handelPassword} value={password}/>
                        </div>

                        <button onClick={handelSignUp}>Sign Up</button>
                    </form>

                </div>

                <div className={`overlay-container ${toggle ? 'overlay-container-right-active' : ''}`}>

                    <div className={`overlay ${toggle ? 'overlay-right-active' : ''}`}>
                        <div className={`overlay-panel overlay-left ${toggle ? 'overlay-left-right-active' : ''}`}>
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            <button className="overlay-btn" onClick={() => setToggle(!toggle)} >Sign In</button>
                        </div>
                        <div className={`overlay-panel overlay-right  ${toggle ? 'overlay-right-right-active' : ''}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="overlay-btn" onClick={() => setToggle(!toggle)}>Sign Up</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default SignUp
