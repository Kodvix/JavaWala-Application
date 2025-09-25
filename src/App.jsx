import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ExplorePrograms from "./Pages/ExplorePrograms";
import CourseDetail from "./Pages/CourseDetail";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import SuccessStories from "./Pages/SuccessStories";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePrograms />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>
    </>
  );
}
