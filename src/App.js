import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-head1-container">
        <p className="app-head">Design Courses</p>
        <p className="app-head2">Courses to get you started</p>
      </div>
      <div className="app-product-container">
        <div className="app-filter-container">
          <Filter />
        </div>
        <div className="app-card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <p className="app-head">Advance yourself with new skill</p>
      <Carousel />
    </div>
  );
}

export default App;
