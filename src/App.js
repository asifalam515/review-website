import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Services from './Component/Services/Services';
import AboutUs from './Component/AboutUs/AboutUs';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Contack from './Component/Contack/Contack';



 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/services">
          
          <Services></Services>
          <footer></footer>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/">
         <Home></Home>
     
       </Route>
       <Route path="/contack">
         <Contack></Contack>

       </Route>
       <Route>
       <NotFound></NotFound>
       </Route>
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
