import React from 'react';
import "./MuzeForm.css";
import DatePick from "./Datepick";
import { useState } from 'react';
import useFetch from "../useFetch";
import { useEffect } from 'react';
import Select from 'react-select'
import EducationDetail from './EducationDetail';

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
  const [itsValue , setItsValue] = useState("");
  const [getIts , setIts] = useState("");
  const [itsData , SetItsData] = useState();
  const [remaingIts , setRemaingIts] = useState();

  const getToken = localStorage.getItem("profile-token")

  const dropoutList = [{"its_id":"30376756","name":"Murtaza bhai  Aqeel bhai Fatehpurwala","email":"murtaza.f72@gmail.com","mobile":"+13478454084","age":"25","gender":"M","jamaat_id":"325","jamaat":"NEW YORK","jamiat":"USA","future_edu_track_id":"59952","future_edu_marhala":"7","future_edu_course":"Master of Engineering in Mechanical Engineering - M.E. (Mechanical Engineering)","future_edu_institute":"New York University","future_edu_country":"United States","future_edu_city":"New York","future_edu_jawab":"bb532e35e49213f819399599b4395d94","current_edu_track_id":"59952","current_edu_marhala":"7","current_edu_course":"Master of Engineering in Mechanical Engineering - M.E. (Mechanical Engineering)","current_edu_institute":"New York University","current_edu_country":"United States","current_edu_city":"New York","current_edu_jawab":"bb532e35e49213f819399599b4395d94","last_edu_track_id":"0","last_edu_marhala":"0","last_edu_course":"","last_edu_institute":"","last_edu_country":"","last_edu_city":"","last_edu_jawab":"","raza_status":"Araz done"},{"its_id":"30392093","name":"Abdeali bhai  Mustafa bhai Dhuliyawalla","email":"musti1971@gmail.com","mobile":"+16468248711","age":"24","gender":"M","jamaat_id":"325","jamaat":"NEW YORK","jamiat":"USA","future_edu_track_id":"54272","future_edu_marhala":"7","future_edu_course":"Doctor of Philosophy in Bio Mechanics - Ph.D. (Bio Mechanics)","future_edu_institute":"Rice University","future_edu_country":"United States","future_edu_city":"Houston","future_edu_jawab":"33caf3570c54b9aff2eef2876011f7e4","current_edu_track_id":"54272","current_edu_marhala":"7","current_edu_course":"Doctor of Philosophy in Bio Mechanics - Ph.D. (Bio Mechanics)","current_edu_institute":"Rice University","current_edu_country":"United States","current_edu_city":"Houston","current_edu_jawab":"33caf3570c54b9aff2eef2876011f7e4","last_edu_track_id":"0","last_edu_marhala":"0","last_edu_course":"","last_edu_institute":"","last_edu_country":"","last_edu_city":"","last_edu_jawab":"","raza_status":"Araz done"}]
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



  useEffect(() => {
    fetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/currentEducationDetails', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${getToken}`,
     },
     body: JSON.stringify({
      "its_id": getIts
 })
   })
   .then((response) => response.json())
   .then((responseJson) => {
    SetItsData(responseJson)
    var result = Object.values(responseJson?.remaining_its).join(",");
    console.log(result)
    setRemaingIts(result)
   })
   .catch((error) => {
     console.error(error);
   });

  }, [getIts])


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

  const handleChangeIts = (e) => {
    setItsValue(e.target.value)
         console.log(e.target.value)
  }

  const handleSubmitIts = () => {
    setIts(itsValue)

  }
  console.log(itsData);



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
       <div className='col-8 past-entries' >
        <h3>Enter or copy paste list of ITS ids of a group of students to check their current education status</h3>
        <div>
            <label>Check ITS ID</label>
            <textarea class="form-control" id="its_id_list" required="" name="its_id_list" rows="8" value={itsValue} onChange={handleChangeIts} ></textarea>
            <button type="submit" id="checkItsIdBtn" class="btn btn-primary mt-3" onClick={handleSubmitIts} >Check</button>
        </div>

    <div className="mb-3 mt-3 itsDataListDiv d-block" >
      <h2>Past Entries of Students Currently Studying</h2>
      <EducationDetail dropoutList={itsData?.currently_studing} />
    </div>

       </div>
       <div className='col-4 entry-form' >
        <h3>Data Entry Form</h3>
        <div style={{marginBottom:"20px"}} >
          <label>ITS ID</label>
          <textarea class="form-control" id="its_id" required="" name="its_id" rows="8" value={remaingIts} ></textarea>
        </div>

        <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Marhala</label>
     <div style={{ width: "100%" }}>
    <Select options={newMurhala} defaultValue={[]}
        onChange={handleChangeMarhala} />
      </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Course</label>
    <Select options={newGetCourse} defaultValue={[]}/>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Country</label>
    <div style={{ width: "100%" }}>
    <Select options={newGetCountry} defaultValue={[]}  onChange={handleChangeCountry} />

          </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>
		<div style={{ width: "100%" }}>
    <Select options={newGetCity} defaultValue={[]}  onChange={handleChangeCity} />

          </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Institute</label>
		<Select options={newGetInstitute} defaultValue={[]}  />
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Accommodation</label>
		<div style={{ width: "100%" }}>
    <Select options={newGetAccommodation} defaultValue={[]} />

          </div>
    </div>
    <div style={{marginBottom:"20px"}}>
    <label for="marhala-selectized">Course Start Date</label>
    <DatePick/>
    </div>
    <div style={{marginBottom:"20px"}}>
    <label for="marhala-selectized">Course End Date</label>
    <DatePick/>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Annual Fees</label>
		{/* <select id="course" name="course" required="" className="form-control"> */}
    <input type="number" className="form-control" value={amount} onChange={handleAmount} />
		{/* </select> */}
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Currency</label>
    <Select options={Currency} defaultValue={[]} />
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>
    <Select options={Scholarship} defaultValue={[]} />
    </div>
   <div style={{marginBottom:"20px"}} >
    <button type="submit" id="checkItsIdBtn" class="btn btn-primary">Submit</button>
   </div>

       </div >

       </div>
    </div>
    </div>
    </>
  )
}
