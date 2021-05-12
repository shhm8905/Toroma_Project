import React, { useEffect } from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hem from "./pages/Home/Hem";
import Liftar from './pages/Liftar/Liftar';
import Personal from './pages/Personal/Personal';
import Kontakt from './pages/Contact/Kontakt';
import Pdf from './Components/Pdf-view/Pdf.jsx';
import Pdf1 from './Components/Pdf-view1/Pdf';
import Footer from './Components/Footer/Footer';
import Up from "./Components/Up/Up";

const App =()=> {

    useEffect(() => {
        let isMunted=true;
        if(isMunted) {Aos.init({
            duration:1000,
            delay:200,
            offset:300,
        })};
        return()=>isMunted=false;
    },[]);

    return (
        
        <div className="App">
            <Up/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Hem} />
                    <Route path="/liftar" component={Liftar} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/kontakt" component={Kontakt} />
                    <Route path="/pdf" component={Pdf} />
                    <Route path="/pdf1" component={Pdf1} />
                </Switch>
                <Footer/>  
            </BrowserRouter>
        </div>
        
    );

}

export default App;