import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import App from '../App';
import Recipe from './Recipe'

const Router=()=>(
    <BrowserRouter>
    <Route path="/" component={App} exact/>
    <Route path="/recipe/:id" component={Recipe}/>
    </BrowserRouter>

)

export default Router;