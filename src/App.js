import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Mamie from "./Mamie.jsx";
import ChooseYourGift from "./ChooseYourGift.jsx";
import Maman from "./Maman.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ChooseYourGift}/>
          <Route path="/mamie" exact component={Mamie}/>
          <Route path="/maman" exact component={Maman}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
