import Navbar from "./Components/Navbar/Navbar";
import scholar from "./Components/assets/scholar.png"
import time from "./Components/assets/time.png"
import adds from "./Components/assets/adds.png"
import courses from "./Components/assets/courses.png"
import live from "./Components/assets/live.png"
import Plans from "./Components/Plans/Plans";
import "./App.css"


const App = ()=> {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="side-bar">
          <h1 className="header">Access curated courses worth ₹ <span className="total">18,500 </span>  at just <span className="discount">₹ 99</span> per year!</h1>
          <div className="benefits">
            <div className="benefits-images">
              <img src={courses} alt="" className="benefits-image"/>
              <img src={time} alt="" className="benefits-image"/>
              <img src={live} alt="" className="benefits-image"/>
              <img src={scholar} alt="" className="benefits-image"/>
              <img src={adds} alt="" className="benefits-image"/>
            </div>
            <div className="benefits-texts">
              <p className="benefit-text"><span className="highlight">100+</span> Job relevant courses</p>
              <p className="benefit-text"><span className="highlight">20,000+</span> Hours content</p>
              <p className="benefit-text"><span className="highlight">Exclusive</span> Webinars</p>
              <p className="benefit-text">Scholarship worth <span className="highlight">₹ 94,500</span></p>
              <p className="benefit-text"><span className="highlight">Ad Free</span> Learning experience</p>
            </div>
          </div>
        </div>
        <Plans/>
      </div>
    </div>
  );
}

export default App;
