import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import MainNav from "./components/mainNav";
import ShopPage from "./components/Shop/ShopPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home";

import { CartContext } from "./store/cartContext";

function App() {
  // const history = useHistory()
  const authCtx = useContext(CartContext);
  const { isLoggedIn } = authCtx.contextValue;
  // isLoggedIn ? history.replace('/home') : history.replace('/login')
  if (!isLoggedIn) {
    // history.replace("/login");
    return (
      <BrowserRouter>
        <MainNav />
        <LoginPage />
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
