import React from 'react';
import Form from 'react-bootstrap/Form';
import "./MuzeForm.css";
import DatePick from "./Datepick";
import MainNavbar from './MainNavbar';
// import autoComplete from "./autoComplete";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState } from 'react';
import useFetch from "../useFetch";
import { useEffect } from 'react';



export default function MuzeProfileForm() {
  const [murhala , setMurhala] = useFetch();

  useEffect(() => {
    setMurhala("araiz/user/marhalaDetails");
  },[]);

  console.log(murhala)

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  const styling = {
    position:" absolute",
    display: "flex",
    flexDirection: "column",
    width:"84%",
    border:" 1px solid #dfe1e5",
    borderRadius: "8px",
    backgroundColor:" white",
    color: "#212121",
    fontSize: "16px",
    fontFamily:" Arial",
}

  

  return (
    <>
    <MainNavbar />
    <div className='form-container'>
    <div className='container mt-3 row form-cotent' >
       <div className='form-header'>
        <h2>
        Student's Education Details - Survey Form
        </h2>
        <div className="text-note">
          This form has been prepared for Ummal Kiraam/Masool al-Mawaze &nbsp; Umoor Talimiyyah Committees for the survey of student's current educational details in their respective mawaze. You may add students details individually and also in bulk.
        </div>
       </div>

       <div className='form-input-container' >
       <div className='col-8' >
        <div>
            <label>Check ITS ID</label>
            <textarea class="form-control" id="its_id_list" required="" name="its_id_list" rows="8"></textarea>
            <button type="submit" id="checkItsIdBtn" class="btn btn-primary mt-3">Check</button>
        </div>

    <div className="mb-3 mt-3 itsDataListDiv d-block" >
      <h2>List of Students Currently Studing</h2>
		<table className="table">
			<tbody>
        <tr>
				<td>ITS ID</td>
				<td>Course</td>
				<td>Country</td>
				<td>City</td>
			</tr>
			</tbody>
      <tbody id="itsDataList">
        <tr>
						<td>50476733</td>
						<td>9th</td>
						<td>Egypt</td>
						<td>Cairo</td>
					</tr>
					</tbody>
		</table>
    </div>

       </div>
       <div className='col-4' >
        <div style={{marginLeft:"20px" , marginBottom:"20px"}} >
          <label>ITS ID</label>
          <textarea class="form-control" id="its_id" required="" name="its_id" rows="8"></textarea>
        </div>

        <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Marhala</label>
<div style={{ width: "100%" }}>
          <ReactSearchAutocomplete
            items={murhala !== null ? murhala : []}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={styling}
          />

          </div>

  
  
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Course</label>
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Country</label>
    <div style={{ width: "100%" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={styling}
          />

          </div>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>
		<div style={{ width: "100%" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={styling}
          />

          </div>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Institute</label>
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Accommodation</label>
		<div style={{ width: "100%" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={styling}
          />

          </div>
    </div>
    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
    <label for="marhala-selectized">Course Start Date</label>
    <DatePick/>
    </div>
    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
    <label for="marhala-selectized">Course End Date</label>
    <DatePick/>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Annual Fees</label>
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Currency</label>
		<Form.Select aria-label="Default select example">
      <option>INR Indian Rupee</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>
		<Form.Select aria-label="Default select example">
      <option>Self Arranged</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>
   <div style={{marginLeft:"20px" , marginBottom:"20px"}} >
    <button type="submit" id="checkItsIdBtn" class="btn btn-primary">Submit</button>
   </div>

       </div >

       </div>
    </div>
    </div>
    </>
  )
}
