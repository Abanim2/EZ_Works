import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section from './Components/Section';




function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={[<Section/>]}></Route>
          {/* <Route path="/Addquestion" element={[<Header/>,<Addquestion/>]}></Route>
          <Route path="/Addanswer" element={[<Header/>,<Addanswer/>]}></Route>
          <Route path="/Login" element={[<Header/>,<Login/>]}></Route>
          <Route path="/Questionandanswer" element={[<Header/>,<Questionandanswer/>]}></Route> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
