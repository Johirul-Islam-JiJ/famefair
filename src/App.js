import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';
import ScrollToTop from './Components/ScrollToTop/Index';

import Index from './Pages/Index';
import ShopIndex from './Pages/Shop/Index';
import SingleProductIndex from './Pages/SingleProduct/Index';
import SearchResultIndex from './Pages/SearchResult/Index';
import CampaignIndex from './Pages/Campaign/Index';

import ContactIndex from './Pages/Contact/Index';
import ShowroomIndex from './Pages/Showroom/Index';

import CartIndex from './Pages/Cart/Index';
import CheckoutIndex from './Pages/Checkout/Index';

import LoginPage from './Pages/Auth/Login';
import RegisterPage from './Pages/Auth/Register';
import ResetPage from './Pages/Auth/Reset';

import AccountMaster from './Pages/Account/Master';

import faqIndex from './Pages/FAQ/Index';
import AboutIndex from './Pages/About/Index';
import FourOFour from './Pages/FourOFour/Index';
import TermsAndConditionsIndex from './Pages/Terms&Conditions/Index';
import PrivacyPolicyIndex from './Pages/PrivacyPolicy/Index';
import ReturnsPolicyIndex from './Pages/ReturnsPolicy/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/shop/:id?" component={ShopIndex} />
            <Route exact path="/product/:id/:name" component={SingleProductIndex} />
            <Route exact path="/search-results" component={SearchResultIndex} />
            <Route exact path="/campaign/:id/:name" component={CampaignIndex} />

            <Route exact path="/contact" component={ContactIndex} />
            <Route exact path="/showroom" component={ShowroomIndex} />

            <Route exact path="/shopping-cart" component={CartIndex} />
            <Route exact path="/checkout" component={CheckoutIndex} />

            <Route exact path="/sign-in" component={LoginPage} />
            <Route exact path="/sign-up" component={RegisterPage} />
            <Route exact path="/reset" component={ResetPage} />

            <Route exact path="/faq" component={faqIndex} />
            <Route exact path="/about-us" component={AboutIndex} />
            <Route exact path="/terms-conditions" component={TermsAndConditionsIndex} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyIndex} />
            <Route exact path="/returns-policy" component={ReturnsPolicyIndex} />

            <PrivateRoute>
              <Route path="/account" component={AccountMaster} />
            </PrivateRoute>
            {/* <Route exact path="/page-not-found" component={FourOFour} /> */}
            <Route path="*" component={FourOFour} />

          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
