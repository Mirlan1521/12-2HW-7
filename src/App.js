


import FirstPage from "./pages/firstPage/FirstPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import {Routes, Route} from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";


function App() {
  return (
    <div>
        <Header/>
        <Menu/>
    <Routes>
        <Route path="/first" element = {<FirstPage/>}/>
        <Route path="/second" element = {<SecondPage/>}/>
        <Route path="/third" element = {<ThirdPage/>}/>

    </Routes>
        <Footer/>
    </div>
  );
}

export default App;
