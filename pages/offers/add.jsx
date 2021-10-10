import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import DatePicker from "react-datepicker";
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from "dateformat";

const ADD = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
     function submit() {
        let name = document.getElementById("oname").value;
        let date1 = document.getElementById("otime1").value;
        let date2 = document.getElementById("otime2").value;
        let text = document.getElementById("otext").value;
        let img = document.getElementById("file");
        let pdf = document.getElementById("file2");

        

        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("description", text);
        formdata.append("start", dateFormat(date1,"yyyy-mm-dd'T'HH:MM:ss")+".927Z");
        formdata.append("end", dateFormat(date2,"yyyy-mm-dd'T'HH:MM:ss")+".927Z");
        formdata.append("image", img.files[0]);
        formdata.append("pdf", pdf.files[0]);

       

        var requestOptions = {
            method: 'POST',
            headers: {  "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
         fetch("http://193.39.9.72:5000/api/admin/promotion/add", requestOptions)
         .then(res => res.json())
         .then(res => console.log(res))
         .catch(e => console.log(e))
        
    }

 
    return ( <div className="offers">
              <Head>
    <title>    طرح های شگفت انگیز و جوایز - هانتر</title>
        </Head>
        <Header />
        <div className="profile-header">
        <p>  طرح های شگفت انگیز و جوایز</p>
    </div>
   <div className="pm">
   <div className="profile-main">
        <div className="dash-title">
            <p>افزودن پیشنهاد ویژه </p>
        </div>
        <div className="add-form">
        <p>   عنوان  </p>
        <input type="text" placeholder="مثال: قطعات جلوبندی" id="oname"/>
            </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file" /><p>آپلود تصوير</p></div>
            
        </div>
        
    </div>
    <div className="add-form" >
        <p>   متن پیشنهاد ویژه  </p>
        <input type="textarea" placeholder="بنویسید..." id="otext" />
        
    </div>
    <div className="banner-res">
       <div className="add-form">
        <p>انتخاب شروع بازه زمانی  </p>
        <DatePicker  id="otime1" selected={startDate} onChange={(date) => setStartDate(date)}/>
        
    </div>
    <div className="add-form">
        <p> انتخاب پایان بازه زمانی </p>
        <DatePicker id="otime2" selected={startDate2} onChange={(date) => setStartDate2(date)} />
        
    </div>
       </div>
    <div className="add-img">
        <p>انتخاب فایل PDF</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file2" type="file" /><p>آپلود PDF</p></div>
            
        </div>
        
    </div>

    <div className="info-btn">
        <button onClick={submit}>ثبت و انتشار پیشنهاد ویژه</button>
    </div>
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default ADD;