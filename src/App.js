import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import World from "./Components/Pages/World";
import Lifestyle from "./Components/Pages/Lifestyle";
import Sport from "./Components/Pages/Sport";
import Business from "./Components/Pages/Business";
import Entertainment from "./Components/Pages/Entertainment";
import NotFound from "./Components/Pages/404";
import Dashboard from "./Components/Dashboard/Dashboard"
import News from "./Components/Dashboard/News"
import AddNews from "./Components/Dashboard/AddNews";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/world" element={<World />} ></Route>
        <Route exact path="/lifestyle" element={<Lifestyle />} ></Route>
        <Route exact path="/business" element={<Business />} ></Route>
        <Route exact path="/entertainment" element={<Entertainment />} ></Route>
        <Route exact path="/sport" element={<Sport />} ></Route>
        <Route exact path="/news" element={<News />} ></Route>
        <Route exact path="/mc-cadman" element={<Dashboard />} ></Route>
        <Route exact path="/add_news" element={<AddNews />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
