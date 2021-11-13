import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useState } from 'react'
import moment from 'moment-jalaali'
import { DatePicker } from "jalali-react-datepicker";
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";


const ADD = () => {
    const[loading,setLoading] = useState(false);
    function x(e) {
       
        let img2 = document.getElementById("sel-img");
        img2.style.display = "block"
        img2.src =   URL.createObjectURL(e.target.files[0]);
     
        document.querySelector(".ai1 p").innerText = e.target.files[0].name;
     
    }

    function x2(e) {
         
      
       
        document.getElementById("pdf-p").innerText = e.target.files[0].name;
     
    }
    const [startDate, setStartDate] = useState(new moment());
    const [startDate2, setStartDate2] = useState(new moment());
     function submit() {
        setLoading(true);
        let name = document.getElementById("oname").value;
        let date1 = document.getElementsByClassName("otime1")[0].value;
        let date2 =  document.getElementsByClassName("otime2")[0].value;
        let text = document.getElementById("otext").value;
        let img = document.getElementById("file");
        let pdf = document.getElementById("file2");

  

        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("description", text);
        formdata.append("start", moment(date1, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DDTHH:mm:ss'));
        formdata.append("end", moment(date2, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DDTHH:mm:ss'));
        formdata.append("image", img.files[0]);
        formdata.append("pdf", pdf.files[0]);
       
       

        var requestOptions = {
            method: 'POST',
            headers: {  "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
         fetch("https://server.hunterpartapp.com/api/admin/promotion/add", requestOptions)
         .then(res => { res.json();
            if (res.status == 200) {
                setLoading(true);
                var modal = document.getElementById("myModal2");
                var pm = document.getElementsByClassName("pm")[0]
                pm.style.filter = "blur(10px)";
                 
                 var span = document.getElementsByClassName("close")[0];
                   modal.style.display = "block";
                
                 
                 
                 span.onclick = function() {
                   modal.style.display = "none";
                   pm.style.filter = "blur(0)";
                 }
            }
        })
        
         .catch(e => console.log(e))
        
    }

 
    return ( <div className="offers">
              <Head>
    <title>    طرح های شگفت انگیز و جوایز - هانتر</title>
        </Head>
        <Header />
        <div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>طرح  جدید ثبت شد </p>
<div className="info-btn">
   <Link href="/offers"><a ><button className="close">تایید</button></a></Link> 
</div>


</div>
</div>
</div>
        <div className="profile-header">
        <p>  طرح های شگفت انگیز و جوایز</p>
    </div>
   <div className="pm">
   <div className="profile-main">
        <div className="dash-title" id="main-title">
        <Link href="/offers"><a > <p id="back">&larr; بازگشت به صفحه قبل</p> </a></Link>
            <p>افزودن پیشنهاد ویژه </p>
        </div>
        <div className="add-form">
        <p>   عنوان  </p>
        <input type="text" placeholder="مثال: قطعات جلوبندی" id="oname"/>
            </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
      <div className="aii">
      <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  onChange={x} /><p>آپلود تصوير</p></div>
            
        </div>
        <img src="" alt="selected image"  id="sel-img"/>
    </div>
    
      </div>
    <div className="add-form" >
        <p>   متن پیشنهاد ویژه  </p>
        <input type="textarea" placeholder="بنویسید..." id="otext" />
        
    </div>
    <div className="banner-res">
       <div className="add-form">
        <p>انتخاب شروع بازه زمانی  </p>
        <DatePicker  className="otime1"  isGregorian={false} selected={startDate} onChange={(date) => setStartDate(date)}/>
        
    </div>
    <div className="add-form">
        <p> انتخاب پایان بازه زمانی </p>
        <DatePicker className="otime2"  isGregorian={false} selected={startDate2} onChange={(date) => setStartDate2(date)} />
        
    </div>
       </div>
    <div className="add-img">
        <p>انتخاب فایل PDF</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file2" type="file" onChange={x2} /><p id="pdf-p">آپلود PDF</p></div>
            
        </div>
        
    </div>
    { loading &&
    <div className="loader">
    <Loader
        type="Rings"
        color="#F58222"
        height={50}
        width={50}
        
      />
      <p>در حال ثبت</p>
    </div>
}
    <div className="info-btn">
        <button onClick={submit}>ثبت و انتشار پیشنهاد ویژه</button>
    </div>
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default ADD;