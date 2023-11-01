import React  from 'react'
import './App1.css';
import { useState } from 'react'
const CourseInfo = () => {
    const [inputarr,
        setInputarr] = useState([])

    const [inputdata,
        SetInputdata] = useState({aa: "", bb: ""})

    function changehandle(e) {
   
        
           SetInputdata({...inputdata,[e.target.name]: e.target.value})
    

    }

    let {aa, bb} = inputdata;
    function changhandle() {

        if(aa==="" && bb===""){
            alert("Enter INPUT fields")
          }else{
        setInputarr([
            ...inputarr, {
                aa,
                bb
            }
        ])
    }
        console.log(inputdata, "input data what we Enter")
        SetInputdata({aa: "", bb: ""})

    }
   
    return (
        <div className="App">
            <h1>Enter Course Informations</h1>
            <input
                width="50%"
                type="text"
                autoComplete='off'
                name='aa'
                value={inputdata.aa}
                onChange={changehandle}
                placeholder="Enter Info Heading"/>
            <input
                type="text"
                autoComplete='off'
                name='bb'
                value={inputdata.bb}
                onChange={changehandle}
                placeholder="Info Details"/>

            <button onClick={changhandle}>Add It
            </button><br/>

            <table border={1} className="inputsimpletable"  cellPadding={20}>
                <tbody>
                    <tr>

                        <th>  # </th>
                        <th>Infos</th>

                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={4}>NO data Enter yet !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>

                                <td>{info.aa}</td>
                                <td>{info.bb}</td>
                            </tr>
                        )
                    })
}

                </tbody>
            </table>
        </div>
    );  
}

export default CourseInfo
