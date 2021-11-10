import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";
import { useState } from 'react'

const ADD = () => {
let img;
const[loading,setLoading] = useState(false);
    function x(e) {
        let img2 = document.getElementById("sel-img");
        img2.style.display = "block"
        img2.src =   URL.createObjectURL(e.target.files[0]);
        img = e.target.files[0];
     
        document.querySelector(".ai1 p").innerText = img.name;
     
    }

     function submit(e) {
        setLoading(true);
        let name = document.getElementById("bname").value;

    if (name != "" && img) {
        e.preventDefault();
 
        
      
       

        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("image", img);
    
        var requestOptions = {
            method: 'POST',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
          
         fetch("https://hunter-server.oben.design/api/admin/product/brand/add", requestOptions)
         .then(res => {res.json();
        if (res.status == 200) {
            setLoading(false);
            var modal = document.getElementById("myModal2");
            var pm = document.getElementsByClassName("pm")[0]
            pm.style.filter = "blur(10px)";
             
             var span = document.getElementsByClassName("close")[0];
               modal.style.display = "block";
            
             
             
             span.onclick = function() {
               modal.style.display = "none";
               pm.style.filter = "blur(0)";
             } 
        }})
       
         .catch(error => console.log('error', error));
    }
    }
    
    return ( <div className="add-brand">
        <Head>
    <title>   برند ها - هانتر</title>
        </Head>
        <Header />
        <div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>برند  جدید ثبت شد </p>
<div className="info-btn">
   <Link href="/brands"><a ><button className="close">تایید</button></a></Link> 
</div>


</div>
</div>
</div>
    <div className="profile-header">
        <p> برند ها</p>
    </div>
       <div className="pm">
       <div className="profile-main">
    <div className="dash-title">
    <Link href="/brands"><a > <p id="back">&larr; بازگشت به صفحه قبل</p> </a></Link>
        <p>   افزودن برند جديد</p>
      
    </div>
    <form >
    <div className="add-form">
        <p>نام برند</p>
        <input type="text" placeholder="مثال: فرنتك" id="bname" required  />
        
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
        <input type="submit" onClick={submit} value="ثبت برند جديد " />
        </div>
        </form>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;