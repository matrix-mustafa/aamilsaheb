import React from 'react';
import "./MuzeForm.css";
import DatePick from "./Datepick";
import { useState } from 'react';
import useFetch from "../useFetch";
import { useEffect } from 'react';
import Select from 'react-select';
import EducationDetail from './EducationDetail';
import DatePicker from "react-datepicker";
import  "./datePicker.css"
import { toast } from 'react-toastify';
import Modals from "./Modals";

import 'react-toastify/dist/ReactToastify.css'

import "react-datepicker/dist/react-datepicker.css";

export default function MuzeProfileForm() {
  const [murhala , setMurhala] = useFetch();
  const [selectedMarhala , setSelectedMarhala] = useState({});
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
  const [entryFormData , setEntryFormData] = useState({
    its_id: "",
    marhala:"",
    course:"",
    country:"",
    city:"",
    institute:"",
    accommodation:"",
    course_start_date:new Date(),
    course_end_date:new Date(),
    annual_fees:"",
    currency:"",
    scholarship:""
  });
  const [errorsMessage, setErrorMessage] = useState({
    its_id: "",
    marhala:"",
    course:"",
    country:"",
    city:"",
    institute:"",
    accommodation:"",
    annual_fees:"",
    currency:"",
    scholarship:""
  })
  // const [modalCountry  , setModalCountry] = useState("");
  // const [modalCity , setModalCity] = useState({
  //   country:"",
  //   city:""
  // })

  const [modalValue , setModalValue] = useState({
    country:"",
    city:"",
    institute :""
  })

  const getToken = localStorage.getItem("profile-token");

  useEffect(() => {
    setMurhala("araiz/user/marhalaDetails");
    setGetCountry("araiz/user/countryDetails");
    setGetAccommodation("araiz/user/accomodationDetails")
  },[]);

  useEffect(() => {
    setGetCourse(`araiz/user/courseDetails/${Number(selectedMarhala.value)}`)
  },[selectedMarhala]);


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
    let postItsIds = getIts.replace(/\n/gi, ",")
    fetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/currentEducationDetails', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${getToken}`,
     },
     body: JSON.stringify({
      "its_id": postItsIds
 })
   })
   .then((response) => response.json())
   .then((responseJson) => {
    SetItsData(responseJson)
    console.log(responseJson);
    let result = Object.values(responseJson?.remaining_its).join("\n");
    setRemaingIts(result)
    let Itsresult = Object.values(responseJson?.remaining_its).join(",");
    setEntryFormData({...entryFormData , its_id: Itsresult})
   })
   .catch((error) => {
     console.error(error);
   });

  }, [getIts])

const checkValidation = () => {
  let validated = true
  const validationErrors = Object.keys(entryFormData).map(e => {
    if(!entryFormData[e] ){
      validated = false
      return {[e] : 'Please fill this field'}
    }else if(e === 'course_start_date' || e === 'course_end_date'){
      validated = false
      return {[e] : ''}
    }
  })
  if(!validated){
    setErrorMessage(validationErrors)
  }
  return validated
}

// console.log(errorsMessage[0].its_id)

  const handleSubmit = () => {
    const isValidated = checkValidation()
    // if(isValidated){
    fetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/postEducationDetails', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${getToken}`,
      },
      body: JSON.stringify({
        ...entryFormData
  })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      toast.success("Records added successfully");
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Some Error occured while saving the data");
    });
  // }
  }


  const handleSubmitModal = (url , getData) => {
    console.log(url , getData)
    fetch(`https://www.talabulilm.com/api2022/araiz/${url}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${getToken}`,
      },
      body: JSON.stringify({
        ...getData
  })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      toast.success("Records added successfully");
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Some Error occured while saving the data");
    });

  }

  
  const handleChange = ( selectedOptions , item) => {
    if(item === "marhala"){
      setSelectedMarhala(selectedOptions);
    }else if(item === "country"){
      setSelectedCountry(selectedOptions)
    }else if(item === "city"){
      setSelectedCity(selectedOptions);
    }
    setEntryFormData({...entryFormData , [item]: selectedOptions.label})
  }


  const handleChangeData = (date , dateLabel) => {
    setEntryFormData({...entryFormData ,  [dateLabel]:date })

  }

  const handleChangeModal = (e) => {
    setModalValue({...modalValue ,[e.target.name] : e.target.value})
  }

  const handleAmount = (e) => {
    setEntryFormData({...entryFormData , annual_fees : e.target.value})
  }

  const handleChangeIts = (e) => {
    setItsValue(e.target.value)
  }

  const handleSubmitIts = () => {
    setIts(itsValue)
  }

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

const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
  <input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      isSecure={isSecure}
      id={id}
      onClick={onClick}
  />
);


// console.log(modalCity);]





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
      <h2> {itsData?.currently_studing.length > 0 ? "Past Entries of Students Currently Studying" : "Past Entries Not Found" } </h2>
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
    <Select options={newMurhala}   isLoading={ newMurhala === undefined ? true : false}
        onChange={ (selectedOptions) => handleChange(selectedOptions , "marhala" )} />
        <span style={{color:	"#ff0000"}} >{errorsMessage[1]?.marhala}</span>
      </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Course</label>
    <Select options={newGetCourse} defaultValue={[]} isLoading={ newGetCourse === undefined ? true: false} onChange={ (selectedOptions) => handleChange(selectedOptions , "course" )}  />
    <span style={{color:	"#ff0000"}} >{errorsMessage[2]?.course}</span>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Country</label>
    <div style={{ width: "100%" }}>
      <Modals type={"country"} handleChangeModal={handleChangeModal} handleSubmitModal={handleSubmitModal} modalValue={modalValue} />
    <Select  options={newGetCountry} defaultValue={[]}   onChange={ (selectedOptions) => handleChange(selectedOptions , "country" )} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[3]?.country}</span>
          </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>
		<div style={{ width: "100%" }}>
    <Modals type={"city"} handleChangeModal={handleChangeModal} modalValue={modalValue} handleSubmitModal={handleSubmitModal}/>
    <Select options={newGetCity} defaultValue={[]}  isLoading={ newGetCity === undefined ? true: false}   onChange={ (selectedOptions) => handleChange(selectedOptions , "city" )} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[4]?.city}</span>
          </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Institute</label>
    <div style={{ width: "100%" }}>
    <Modals type={"institute"} handleChangeModal={handleChangeModal} modalValue={modalValue} handleSubmitModal={handleSubmitModal} />
		<Select options={newGetInstitute} defaultValue={[]}  onChange={ (selectedOptions) => handleChange(selectedOptions , "institute" )} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[5]?.institute}</span>
    </div>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Accommodation</label>
		<div style={{ width: "100%" }}>
    <Select options={newGetAccommodation} defaultValue={[]} onChange={ (selectedOptions) => handleChange(selectedOptions , "accommodation" )} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[6]?.accommodation}</span>
          </div>
    </div>
    <div style={{marginBottom:"20px"}}>
    <label for="marhala-selectized">Course Start Date</label>
    <DatePicker selected={entryFormData.course_start_date}   customInput={<Input />} onChange={(date) => handleChangeData(date ,  "course_start_date")} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[7]?.course_start_date}</span>
    </div>
    <div style={{marginBottom:"20px"}}>
    <label for="marhala-selectized">Course End Date</label>
    <DatePicker selected={entryFormData.course_end_date}   customInput={<Input />} onChange={(date) => handleChangeData(date ,  "course_end_date")} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[8]?.course_end_date}</span>
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="course">Annual Fees</label>
		{/* <select id="course" name="course" required="" className="form-control"> */}
    <input type="number" className="form-control" value={amount} onChange={handleAmount} />
		{/* </select> */}
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Currency</label>
    <Select options={Currency} defaultValue={[]} onChange={ (selectedOptions) => handleChange(selectedOptions , "currency" )} />
    </div>

    <div style={{marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>
    <Select options={Scholarship} defaultValue={[]}  onChange={ (selectedOptions) => handleChange(selectedOptions , "scholarship" )} />
    </div>
   <div style={{marginBottom:"20px"}} >
    <button type="submit" id="checkItsIdBtn" class="btn btn-primary" onClick={handleSubmit} >Submit</button>
   </div>

       </div >

       </div>
    </div>
    </div>
    </>
  )
}
