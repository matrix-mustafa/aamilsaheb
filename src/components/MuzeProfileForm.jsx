import React from 'react';
import Form from 'react-bootstrap/Form';
import "./MuzeForm.css";
import DatePick from "./Datepick";
import { useState } from 'react';
import useFetch from "../useFetch";
import { useEffect } from 'react';
import Select from 'react-select'

export default function MuzeProfileForm() {
  const [murhala , setMurhala] = useFetch();
  const [selectedOptions , setSelectedOptions] = useState([]);
  const [getCourse , setGetCourse] = useFetch();
  const [getCountry , setGetCountry] = useFetch();
  const [getCity , setGetCity] = useFetch();
  const [getAccommodation , setGetAccommodation] = useFetch();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [getInstitute,  setGetInstitute] = useFetch();
  const [ amount , setAmount] = useState();
 

  useEffect(() => {
    setMurhala("araiz/user/marhalaDetails")
    setGetCountry("araiz/user/countryDetails");
    setGetAccommodation("araiz/user/accomodationDetails")
  },[]);

  useEffect(() => {
    setGetCourse(`araiz/user/courseDetails/${Number(selectedOptions.value)}`)
  },[selectedOptions]);


  useEffect(() => {
    if(selectedCountry){
      setGetCity(`araiz/user/cityDetailsByCountryISO/${selectedCountry.value}`)
    }
  },[selectedCountry]);

  useEffect(() => {
    if(selectedCity){
      setGetInstitute(`araiz/user/instituteDetailsBycityID/${selectedCity.value}`)
    }
  },[selectedCity]);




  const handleChangeMarhala = (selectedOptions) => {
    setSelectedOptions( selectedOptions);
  }


  const handleChangeCountry = (selectedCountry) => {
    setSelectedCountry(selectedCountry)
  }

  const handleChangeCity = (selectedCountry) => {
    setSelectedCity(selectedCountry)
  }


  const handleAmount = (e) => [
    setAmount(e.target.value)
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

 const  newGetCountry = getCountry?.map((item) => {
  return {
    "value" : item.iso2,
    "label": item.name
  }
 })

 const  newGetCity = getCity?.map((item) => {
  return {
    "value" : item.id,
    "label": item.city_name
  }
 })

 const  newGetAccommodation = getAccommodation?.map((item) => {
  return {
    "value" : item.id,
    "label": item.name
  }
 })

 const  newGetInstitute = getInstitute?.map((item) => {
  return {
    "value" : item.id,
    "label": item.name
  }
 })

 const Currency = [
  { value: 'chocolate', label: 'INR - Indian Rupee' },
  { value: 'strawberry', label: 'USD - US Dollar' },
  { value: 'vanilla', label: 'GBD - British Pound' },
  { value: 'vanilla', label: 'EUR - Euro' }
]

const Scholarship = [
  { value: 'chocolate', label: 'Self Arranged' },
  { value: 'strawberry', label: 'Quran Hasana by jamaat' },
  { value: 'vanilla', label: 'Quran Hasana by other source' },
  { value: 'vanilla', label: 'Scholarship' }
]



  return (
    <>
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
      <h2>Past Entries of Students Currently Studying</h2>
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
    <Select options={newGetCountry} defaultValue={[]}  onChange={handleChangeCountry} />

          </div>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>
		<div style={{ width: "100%" }}>
    <Select options={newGetCity} defaultValue={[]}  onChange={handleChangeCity} />

          </div>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Institute</label>
		<Select options={newGetInstitute} defaultValue={[]}  />
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Accommodation</label>
		<div style={{ width: "100%" }}>
    <Select options={newGetAccommodation} defaultValue={[]} />

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
		{/* <select id="course" name="course" required="" className="form-control"> */}
    <input type="number" className="form-control" value={amount} onChange={handleAmount} />
		{/* </select> */}
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Currency</label>
    <Select options={Currency} defaultValue={[]} />
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>
    <Select options={Scholarship} defaultValue={[]} />
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
