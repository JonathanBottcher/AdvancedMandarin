import React from 'react';
import Standard from './components/standard_learning/Standard';
import Header from './components/Header';
import FetchHsk1 from './components/sentences/FetchS';
import RenderSentences from './components/sentences/RenderSentences';
import RandomSelection from './components/Selection';
import Home from './components/home_page/Home';
import Welcome from './components/welcome_page/Welcome';
import Standard_sentences from './components/standard_learning/Standard_sentences';
import RandomLearning from './components/RandomLearning';
import SelectLevel from './components/level_select/SelectLevel';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";


const App = () => {
    return (
        <>
        {/*<Navbar/>*/}
        <BrowserRouter>
        
            <Routes>
            <Route path="/" >
                <Route index element={ <Header />} />
                <Route path='welcome' element={ <Welcome />} />
                <Route path='sentences' element={ <FetchHsk1 />} />
                <Route path='random_hsk1' element={ <RenderSentences />} />
                <Route path='random_selection' element={ <RandomSelection />} />
                <Route path='home' element={ <Home />} />
                <Route path='standard' element={ <Standard />} />
                <Route path='standard_sentences' element={ <Standard_sentences />} />
                <Route path='random-learning' element={ <RandomLearning />} />
                <Route path='select-level' element={ <SelectLevel />} />
               
                
            </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default App;