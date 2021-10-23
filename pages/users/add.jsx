
import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";
import { useState } from 'react'

const ADD = () => {

 
  const[loading,setLoading] = useState(false);

 
    async function submit(e) {
        e.preventDefault();
      let fname = document.getElementById("cname").value;
      let lname = document.getElementById("cname2").value;
      let mobile = document.getElementById("cname3").value;
      let phone = document.getElementById("cname4").value;   
      let city = document.getElementById("cname7").value;
      let province = document.getElementById("cname8").value;
      let job = document.getElementById("cname6").value;
      let store = document.getElementById("cname5").value;    
      let zone = document.getElementById("cname9").value;
      let address = document.getElementById("cname10").value;
      
    


 

      setLoading(false);
   

  



  var requestOptions = {
      method: 'POST',
      headers: {
        "content-type":"application/json",
        "x-auth-token":`${localStorage.getItem('token')}`},
      body:JSON.stringify({
        "firstName": fname,
        "lastName": lname,
        "mobileNumber": mobile,
        "telephoneNumber": phone,
        "storeName": store,
        "activity": job,
        "address": {
          "province": province,
          "city": city,
          "zone": zone,
          "address": address
        }
      }),
      redirect: 'follow'
    };
  let res = await fetch("https://hunter-server.oben.design/api/admin/user/customer/add", requestOptions);
  let posts = await res.json();
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

    
    }


 



 

    return ( <div className="brands" id="add-user">
          <Head>
    <title>   کاربران - هانتر</title>
        </Head>
        <Header />
  

<div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p> کاربر جدید ثبت شد </p>
<div className="info-btn">
   <Link href="/users"><a ><button className="close">تایید</button></a></Link> 
</div>


</div>
</div>
</div>
    <div className="profile-header">
        <p> کاربران </p>
    </div>
       <div className="pm">
       <div className="profile-main">
        <div className="dash-title">
        <Link href="/users"><a > <p id="back">&larr; بازگشت به صفحه قبل</p> </a></Link>
            <p>افزودن کاربر  جديد</p>
        </div>
        <form >
      <div className="au-forms">
      <div className="add-form">
        <p>نام  کاربر</p>
        <input type="text" id="cname" required/>
    </div>
    <div className="add-form">
        <p>نام خانوادگی کاربر</p>
        <input type="text"  id="cname2" required/>
    </div>
    <div className="add-form">
        <p>  شماره همراه</p>
        <input type="text" id="cname3" required/>
    </div>
    <div className="add-form">
        <p>  شماره ثابت</p>
        <input type="text" id="cname4" required/>
    </div>
    <div className="add-form">
        <p>  نام فروشگاه</p>
        <input type="text" id="cname5" required/>
    </div>
    <div className="add-form">
        <p>  نوع فعالیت</p>
        
        <select name="job" id="cname6" required>
          <option value="مکانیک">مکانیک</option>
          <option value="مغازه دار">مغازه دار</option>
        </select>
    </div>
    <div className="add-form">
        <p>  شهر</p>
        <input type="text" id="cname7" required/>
    </div>
    <div className="add-form">
        <p>  استان</p>
        <input type="text" id="cname8" required/>
    </div>
    <div className="add-form">
        <p>  منطقه</p>
        <input type="text" id="cname9" required/>
    </div>
    <div className="add-form">
        <p>  آدرس</p>
        <input type="text" id="cname10" required/>
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
            <input type="submit" onClick={submit} value="ثبت  کاربر جدید " />
        </div>
        </form>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;