import React from 'react'
import './App2.css';
import download from './download (2).png'
const Coursecontoutline = () => {
  return (

    <div >
        <div> 
            <img src={download} alt='JU'></img> 
            <h1>Course Content Outline</h1>
        </div>
      <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label" >Enter Heading:</label>
    <div class="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Write Here"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Enter Discription:</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Write Here"/>
    </div>
  </div>
  <fieldset className="form-group">
  <div className="row ">
      <legend className="col-form-label col-sm-2 pt-0">Included CLOS:</legend>
      <div className="col-sm-10">

        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>

        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>

      </div>
      
    </div>
  <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Included ILOs(Knowledge):</legend>
      <div className="col-sm-10">

        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>

      </div>
      
    </div>
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Included ILOs(Skill):</legend>
      <div className="col-sm-10">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>
   

        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>
      
      </div>
      
    </div>
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Included ILOs(Attitude):</legend>
      <div className="col-sm-10">
   
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>


        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1"> Example checkbox
        </label>

      </div>
      
    </div>
  </fieldset>
 
</form>
<button type="button" class="btn btn-dark">Save</button>
    </div>
  )
}

export default Coursecontoutline

