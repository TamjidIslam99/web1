import React from 'react'
import './App2.css';
import download from './download (2).png'
const Guidedlearning = () => {
  return (

    <div  >
        <div> 
            <img src={download} alt='JU'></img> 
            <h1>Guided Learning</h1>
        </div>
      <form>
        
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Face To Face:</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Lecture (Hours):</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Exercise (hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Practical (Hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Others(hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Non Face to Face (Hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Independent Learning (Hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Total SLT (Hours):</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  
 
</form>
<button type="button" class="btn btn-dark">Save</button>
    </div>
  )
}

export default Guidedlearning

