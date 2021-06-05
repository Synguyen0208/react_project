import logo from './logo.svg';
// import './App.css';
import Header from "./component/header";
import Slider from './component/slider/slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from "./component/SignUp/SignIn";
import Register from "./component/Register/register";
import Footer from './component/footer';
import Slider1 from './component/slider/slider1';
import Content from './component/content';
import Cart from './component/cart/cart';
import Order from './component/order';
import Checkout from './component/cart/checkout';
import Purchase from './component/cart/purchase';
import Details from './component/content/details';
import BestView from './component/bestview';
import Slider_banner from './component/slider/slider_banner';
import BestSell from './component/bestsell';
import Service from './component/content/service';
import Shop from './component/shop';
import Search from './component/search';
import AboutUs from './component/content/aboutUs';
import Chat from './component/content/chat';
import Forgot from './component/SignUp/forgot';
function App() {
  return (

    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Slider1 />
            <Content />
            <Slider_banner/>
            <BestView />
            <BestSell/>
            <Service/>
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search/:name" component={Search}/>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/thank">
            <Order />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/detail/:id" component={Details } />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
