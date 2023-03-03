import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Left from "./components/Left";
import Right from "./components/Right";
import cityphoto from './cityImage/colourful.png'

const App = ()=> {
  return (
    <div className="App">
      <div className="container" style={{marginTop:"60px",marginBottom:'60px'}}>
        <div className="row rounded-5" style={{backgroundColor:"#5c9ce5", backgroundImage: `url(${cityphoto})`, height:"680px"}}>
          <div className="col-md-3 rounded-5 p-4 bg-transparent" style={{backgroundColor:"#5c9ce5"}}>
            <Left/>
          </div>
          <div className="col-md-9 rounded-5 p-4" style={{backgroundColor:"#e4f1ff"}}>
            <Right/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
