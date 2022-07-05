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
import Select from 'react-select'



export default function MuzeProfileForm() {
  const [murhala , setMurhala] = useFetch();
  const [selectedOptions , setSelectedOptions] = useState([]);
  const [getCourse , setGetCourse] = useFetch();
  
  useEffect(() => {
    setMurhala("araiz/user/marhalaDetails")
  },[]);



  useEffect(() => {
    console.log(selectedOptions.value)
    setGetCourse(`araiz/user/courseDetails/${Number(selectedOptions.value)}`)
  },[selectedOptions]);

  const handleChangeMarhala = (selectedOptions) => {
    console.log("hy")
    setSelectedOptions( selectedOptions);
  }


  console.log(selectedOptions)

  

  // console.log(murhala)

  

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

 const  newMurhala = murhala?.map((item) => {
  return {
    "value" : item.id,
    "label": item.text
  }
 })

 const  newGetCourse = getCourse?.map((item) => {
  return {
    "value" : item.id,
    "label": item.course_name
  }
 })

 console.log(getCourse)


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
    <Select options={newMurhala} defaultValue={[]} 
        onChange={handleChangeMarhala} />
      </div> 
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Course</label>
    <Select options={newGetCourse} defaultValue={[]}/>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Country</label>
    <div style={{ width: "100%" }}>
    <Select options={options} defaultValue={options[0]} />

          </div>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>
		<div style={{ width: "100%" }}>
    <Select options={options} defaultValue={options[0]} />

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
    <Select options={options} defaultValue={options[0]} />

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
    <Select options={options} defaultValue={options[0]} />
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>
    <Select options={options} defaultValue={options[0]} />
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
