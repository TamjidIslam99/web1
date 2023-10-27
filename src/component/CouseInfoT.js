import React from 'react'
import  './App1.css'
const CouseInfoT = () => {
  return (
    <div >
      <table className='table table-bordered table-light text-center'>
            <thead>
                <tr>
                    <th colSpan={4}>Course Informations</th>
                    
                </tr>
                <tr >
                     <th >Course Code</th>
                
                    <td><input type="type" /></td>
                    <th>Faculty</th>
                    <td><input type="typer" /></td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                <th>Title</th>
                
                <td><input type="type" /></td>
                <th>Credit</th>
                <td><input type="typer" /></td>
                </tr>
                <tr>
                <th>Type</th>
                
                <td><input type="type" /></td>
                <th>Prequisit</th>
                <td><input type="typer" /></td>
                </tr>
                <tr>
                <th>Total number</th>
                
                <td><input type="type" /></td>
                <th>Contact hour</th>
                <td><input type="typer" /></td>
                </tr>
            
            </tbody>
        </table>
        <button type="button" class="btn btn-warning">Save</button>
    </div>
  )
}

export default CouseInfoT
