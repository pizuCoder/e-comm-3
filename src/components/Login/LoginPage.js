import { useState, useRef, useContext } from "react";
import { CartContext } from "../../store/cartContext";
import classes from "./LoginPage.module.css";
import { useHistory } from 'react-router-dom';


const AuthForm = () => {
  const history = useHistory()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(CartContext)
  const { login } = authCtx.contextValue;
  const [isLogin, setIsLogin] = useState(true);
  const [showError, setShowError] = useState("");
  const [signupInProgress, setSignupInProgress] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    

    // optional: Add validation
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYk7PElj1CJoVcy3vpU9EKE3H8avKOleo";
    } else {
      url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYk7PElj1CJoVcy3vpU9EKE3H8avKOleo";
      setSignupInProgress(true); // set signup in progress
      setSignupSuccess(""); // reset signup success message
      setShowError(""); // reset error message
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          if(!isLogin){
            setSignupSuccess("Signup Successful, you may login");
          }
          setShowError("");
          return res.json()
        } else {
          return res.json().then((data) => {
            setShowError(data.error.message);
            let errorMessage = 'Authentication Failed'
            throw new Error(errorMessage)
          });
        }
      }).then((data) => {
        // console.log(data)
        login(data.idToken)
        history.replace('/shop')
      }).catch((err) => {
        alert(err.message)
      }
      )
      .finally(() => {
        setSignupInProgress(false); // reset signup in progress
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {signupInProgress ? (
            <button type="button" className={classes.btn}>
              Signup in progress...
            </button>
          ) : (
            <button type="submit" className={classes.btn}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          {showError && <div style={{ color: "white" }}>{showError}</div>}
          {signupSuccess && (
            <div style={{ color: "white" }}>{signupSuccess}</div>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;