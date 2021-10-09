import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import DatePicker from "react-datepicker";
import { useEffect,useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";

const ADD = () => {
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
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  />
        
    </div>
    <div className="add-form">
        <p> انتخاب پایان بازه زمانی </p>
        <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)}  />
        
    </div>
       </div>
    <div className="info-btn">
        <button>ثبت و انتشار پیشنهاد ویژه   </button>
        </div>
    </div>
    <Navbar />
        </div>
   
    </div> );
}
 
export default ADD;