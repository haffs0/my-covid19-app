import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EstimatorPage from './components/estimator/EstimatorPage'
import EstimatorResultPage from './components/estimator/EstimatorResultPage'
import PageNotFound from './components/PageNotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"



const App = () => (
    <div className="container-fluid">
        <Switch>
            <Route exact path="/" component={EstimatorPage}/>
            <Route path="/result" component={EstimatorResultPage}/>
            <Route component={PageNotFound}/>
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
    </div>
)

export default App;