import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import MainPage from "./components/MainPage";
import Upload from "./components/Upload";


function App() {
  return (
    <div className="root">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/admin/upload" component={Upload}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
