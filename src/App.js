import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import MainNav from "./components/mainNav";
import ShopPage from "./components/Shop/ShopPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home";
import ProductPage from "./components/Shop/productPage";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs/ContactUs";


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
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/shop/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
