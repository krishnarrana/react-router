import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import About from "./Components/About";
import Header from "./Header";
import Category from "./Components/Category";
import Breed from "./Components/Breed";
import Register from "./Components/Register";
import Confirmation from "./Components/Confirmation";
const App = () => {
  return (
    <>
      <div className="main-contain">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="categories"
            element={<Categories title="Categories Page" />}
          >
            <Route path=":catId" element={<Category />}>
              <Route path=":breedId" element={<Breed />} />
              <Route
                index
                element={<h1 className="top-30">Select any breed</h1>}
              />
            </Route>
            <Route
              index
              element={<h1 className="top-30">Select any animal</h1>}
            />
          </Route>
          <Route path="about" element={<About title="About Us" />} />
          <Route path="reigster" element={<Register />} />
          <Route path="confirmed" element={<Confirmation />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
