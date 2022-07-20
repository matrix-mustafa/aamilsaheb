import React from 'react';
import "./MuzeForm.css";
import { useState } from 'react';
import useFetch from "../useFetch";
import { useEffect } from 'react';
import Select from 'react-select';
import EducationDetail from './EducationDetail';
import DatePicker from "react-datepicker";
import  "./datePicker.css"
import { toast } from 'react-toastify';
import Modals from "./Modals";
import  {Col , Row} from 'react-bootstrap';

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
    selectedMarhala?.value && setGetCourse(`araiz/user/courseDetails/${Number(selectedMarhala.value)}`)
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

  const handleSubmit = () => {
    const isValidated = checkValidation()
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
  }

  const handleSubmitModal = (url , getData) => {
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


  return (
    <>
    <div className='form-container'>
    <div className='container mt-3 row form-cotent' >
       <div className='form-header'>
        <Row>
          <Col sm={12}>
            <div className='past-entries'>
              <h3>Student's Education Details - Survey Form</h3>
              <div className="text-note">
                This form has been prepared for Ummal Kiraam/Masool al-Mawaze and Umoor Talimiyyah Committees for the survey of student's current educational details in their respective mawaze. You may add students details individually and also in bulk.
              </div>
            </div>
          </Col>
        </Row>
       </div>

       <div className='form-input-container' >
        <Row>
       <Col sm={12} lg={8}>
        <div className='past-entries'>
          <h3>Verify ITS IDs</h3>
          <div className="text-note">
            Enter or paste ITS IDs of students whose Education data needs to be updated. The students whose current education data already exists will be shown below in the table. Students with no data, their ITS IDs will be added to the Data Entry Form for entry.
          </div>
          <div>
              <label>Check ITS ID</label>
              <textarea className="form-control" id="its_id_list" required="" name="its_id_list" rows="8" value={itsValue} onChange={handleChangeIts} ></textarea>
              <button type="submit" id="checkItsIdBtn" className="btn btn-primary mt-3" onClick={handleSubmitIts} >Check</button>
          </div>

          <div className="mb-3 mt-3 itsDataListDiv d-block" >
            <h2> {itsData?.currently_studing.length > 0 ? "Existing entries of these students" : "" } </h2>
            <EducationDetail dropoutList={itsData?.currently_studing} />
          </div>
        </div>
       </Col>
       <Col sm={12} lg={4}>
        <div className='entry-form'>
          <h3>Data Entry Form</h3>
          <div style={{marginBottom:"20px"}} >
            <label>ITS ID</label>
            <textarea className="form-control" id="its_id" required="" name="its_id" rows="8" value={remaingIts} ></textarea>
          </div>

        <div className='mb-3'>
          <label htmlFor="marhala-selectized">Marhala</label>
          <span style={{color:"red"}} >*</span>
          <div style={{ width: "100%" }}>
            <Select options={newMurhala}   isLoading={ newMurhala === undefined ? true : false}
              onChange={ (selectedOptions) => handleChange(selectedOptions , "marhala" )} />
            <span style={{color:	"#ff0000"}} >{errorsMessage[1]?.marhala}</span>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor="course">Course</label>
          <span style={{color:"red"}} >*</span>
          <Select options={newGetCourse} defaultValue={[]} isLoading={ newGetCourse === undefined && Object.keys(selectedMarhala).length !== 0 ? true: false} onChange={ (selectedOptions) => handleChange(selectedOptions , "course" )}  />
          <span style={{color:	"#ff0000"}} >{errorsMessage[2]?.course}</span>
        </div>

    <div className='mb-3'>
		  <label htmlFor="marhala-selectized">Country</label>
      <span style={{color:"red"}} >*</span>
      <Modals type={"country"} handleChangeModal={handleChangeModal} handleSubmitModal={handleSubmitModal} modalValue={modalValue} />
      <Select  options={newGetCountry} defaultValue={[]}   onChange={ (selectedOptions) => handleChange(selectedOptions , "country" )} />
      <span style={{color:	"#ff0000"}} >{errorsMessage[3]?.country}</span>
    </div>

    <div className='mb-3'>
		<label htmlFor="marhala-selectized">City</label>
    <span style={{color:"red"}} >*</span>
    <Modals type={"city"} handleChangeModal={handleChangeModal} modalValue={modalValue} handleSubmitModal={handleSubmitModal}  />
    <Select options={newGetCity} defaultValue={[]}  isLoading={ newGetCity === undefined  ? true: false} onChange={ (selectedOptions) => handleChange(selectedOptions , "city" )} />
    <span style={{color:	"#ff0000"}} >{errorsMessage[4]?.city}</span>
    </div>

    <div className='mb-3'>
		  <label htmlFor="course">Institute</label>
      <span style={{color:"red"}} >*</span>
        <Modals type={"institute"} handleChangeModal={handleChangeModal} modalValue={modalValue} handleSubmitModal={handleSubmitModal} />
		    <Select options={newGetInstitute} defaultValue={[]}  onChange={ (selectedOptions) => handleChange(selectedOptions , "institute" )} />
        <span style={{color:	"#ff0000"}} >{errorsMessage[5]?.institute}</span>
    </div>

    <div className='mb-3'>
		  <label htmlFor="marhala-selectized">Accommodation</label>
      <span style={{color:"red"}} >*</span>
        <Select options={newGetAccommodation} defaultValue={[]} onChange={ (selectedOptions) => handleChange(selectedOptions , "accommodation" )} />
        <span style={{color:	"#ff0000"}} >{errorsMessage[6]?.accommodation}</span>
    </div>
    <div className='mb-3'>
      <label htmlFor="marhala-selectized">Course Start Date</label>
      <span style={{color:"red"}} >*</span>
      <DatePicker selected={entryFormData.course_start_date}    onChange={(date) => handleChangeData(date ,  "course_start_date")} />
      <span style={{color:	"#ff0000"}} >{errorsMessage[7]?.course_start_date}</span>
    </div>
    <div className='mb-3'>
      <label htmlFor="marhala-selectized">Course End Date</label>
      <span style={{color:"red"}} >*</span>
      <DatePicker selected={entryFormData.course_end_date}    onChange={(date) => handleChangeData(date ,  "course_end_date")} />
      <span style={{color:	"#ff0000"}} >{errorsMessage[8]?.course_end_date}</span>
    </div>

    <div className='mb-3'>
		<label htmlFor="course">Annual Fees</label>
    <input type="number" className="form-control" value={amount} onChange={handleAmount} />
    </div>

    <div className='mb-3'>
		<label htmlFor="marhala-selectized">Currency</label>
    <Select options={Currency} defaultValue={[]} onChange={ (selectedOptions) => handleChange(selectedOptions , "currency" )} />
    </div>

    <div className='mb-3'>
		<label htmlFor="marhala-selectized">Scholarship</label>
    <Select options={Scholarship} defaultValue={[]}  onChange={ (selectedOptions) => handleChange(selectedOptions , "scholarship" )} />
    </div>
   <div className='mb-3'>
    <button type="submit" id="checkItsIdBtn" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
   </div>
        </div>
       </Col >
        </Row>

       </div>
    </div>
    </div>
    </>
  )
}
