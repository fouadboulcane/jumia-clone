import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login/login";
import TopHeader from "./components/topheader/topheader";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";
import Register from "./pages/register/register";
import CategoryList from "./components/category-list/category-list";
import Cover from "./components/cover/cover";
import ProductPage from "./pages/product-page/product-page";
import CartPage from "./pages/cart-page/cart-page";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import ProductListPage from "./pages/product-list-page/product-list-page";
import CustomerPage from "./pages/customer-page/customer-page";
import Checkout from "./pages/checkout/checkout";

import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  const [{ favouritedItems }, dispatch] = useStateValue()

  return (
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <div className="App">
            <TopHeader />
            <Header />
            <Switch>
              <Route path='/checkout'>
                <Checkout />
              </Route>
              <Route path="/favourited">
                <h3>Favourited Items</h3>
                <p>{favouritedItems}</p>
                <ul>
                  {favouritedItems.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </Route>
              <PrivateRoute path="/customer" component={CustomerPage} />
              <Route path="/product-list" component={ProductListPage} />
              <Route path="/cart">
                <CartPage />
              </Route>
              <Route path="/product/:id">
                <ProductPage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Banner />
                <Section title="Section One"></Section>
                <Section title="Section Two"></Section>
                <Section title="Categories">
                  <CategoryList />
                </Section>
                <Section title="Section Two"></Section>
                <Section>
                  <Cover />
                </Section>
                <Section title="Categories">
                  <CategoryList />
                </Section>
                <Section title="Articles vus récemment"></Section>
              </Route>

            </Switch>
            <Footer />
          </div>
        </ProductsProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;
