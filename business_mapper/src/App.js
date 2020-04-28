import React from 'react';
// import SVG from 'react-inlinesvg';
// import logo from './perspecta_logo_tm_0.png';
import './App.css';

function App() {
  return (
      <div className="App">

          <div className="App-logo">
              <img src="https://perspecta.com/sites/default/files/perspecta_logo_tm_0.png" alt="logo" />
          </div>

          <div className="navbar">
              <div className="dropdown">
              <button className="dropbtn"> File
                      <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                  <a href="#"> New </a>
                  <a href="#"> Open
                    <input type="button" id="get_file" value="Grab file" />
                    <input type="file" id="my_file" />
                  </a>
                  <a href="#">Save</a>
                  <a href="#">Save As...</a>
                  <a href="#">Export as PDF</a>
                  <a href="#">Close</a>
              </div>
              </div>

              <div className="dropdown">
                  <button className="dropbtn"> Edit
                      <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                      <a href="#">Cut</a>
                      <a href="#">Copy</a>
                      <a href="#">Paste</a>
                      <a href="#">Move</a>
                      <a href="#">Insert</a>
                      <a href="#">Delete</a>
                  </div>
              </div>
              <a href="#">Help</a>
              <a href="#" className="right">Login</a>
          </div> 
          </div>
  );
}

export default App;