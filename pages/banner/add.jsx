import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import DatePicker from "react-datepicker";
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from "dateformat";

const ADD = () => {

    
    async function submit() {
        let date1 = document.getElementById("otime1").value;
        let date2 = document.getElementById("otime2").value;
        let img = document.getElementById("file");
 

        var formdata = new FormData();
        formdata.append("start", dateFormat(date1,"yyyy-mm-dd'T'HH:MM:ss")+".927Z");
        formdata.append("end", dateFormat(date2,"yyyy-mm-dd'T'HH:MM:ss")+".927Z");
        formdata.append("image", img.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch("http://193.39.9.72:5000/api/admin/banner/add", requestOptions);
        let posts = await res.json();
        console.log(posts);
    }
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
  
    return ( <div className="banner-page">
          <Head>
        <title> بنر پیشنهاد ویژه - هانتر</title>
            </Head>
            <Header />
            <div className="profile-header">
            <p> بنر پیشنهاد ویژه</p>
        </div>
        <div className="pm">
        <div className="profile-main">
    <div className="dash-title">
        <p>   افزودن بنر </p>
    </div>
 
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file" /><p>آپلود تصوير</p></div>
            
        </div>
        
    </div>
       <div className="banner-res">
       <div className="add-form">
        <p>انتخاب شروع بازه زمانی  </p>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="otime1" />
        
    </div>
    <div className="add-form">
        <p> انتخاب پایان بازه زمانی </p>
        <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} id="otime2" />
        
    </div>
       </div>
    <div className="info-btn">
        <button onClick={submit}>ثبت و انتشار پیشنهاد ویژه   </button>
        </div>
    </div>
    <Navbar />
        </div>
   
    </div> );
}
 
export default ADD;