import React from 'react';
import Standard from './components/standard_learning/Standard';
import Header from './components/header/Header';
import FetchHsk1 from './components/sentences/FetchS';
import RenderSentences from './components/sentences/RenderSentences';
import RandomSelection from './components/Selection';
import ModeSelection from './pages/mode_selection/ModeSelection';
import Welcome from './pages/welcome/Welcome';
import Standard_sentences from './components/standard_learning/Standard_sentences';
import RandomLearning from './components/RandomLearning';
import SelectLevel from './components/level_select/SelectLevel';
import Home from './pages/home/home';
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
                <Route path='mode_selection' element={ <ModeSelection />} />
                <Route path='standard' element={ <Standard />} />
                <Route path='standard_sentences' element={ <Standard_sentences />} />
                <Route path='select-level' element={ <SelectLevel />} />
                <Route path='home' element={ <Home />} />
                
                <Route path='random-learning/1' element={ <RandomLearning level={'level-1'} />} />
                <Route path='random-learning/2' element={ <RandomLearning level={'level-2'} />} />
                <Route path='random-learning/3' element={ <RandomLearning level={'level-3'} />} />
                <Route path='random-learning/4' element={ <RandomLearning level={'level-4'} />} />
                <Route path='random-learning/5' element={ <RandomLearning level={'level-5'} />} />
            </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default App;