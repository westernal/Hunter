
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
  let res = await fetch("https://server.hunterpartapp.com/api/admin/user/customer/add", requestOptions);
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
    <title>   ?????????????? - ??????????</title>
        </Head>
        <Header />
  

<div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p> ?????????? ???????? ?????? ???? </p>
<div className="info-btn">
   <Link href="/users"><a ><button className="close">??????????</button></a></Link> 
</div>


</div>
</div>
</div>
    <div className="profile-header">
        <p> ?????????????? </p>
    </div>
       <div className="pm">
       <div className="profile-main">
        <div className="dash-title">
        <Link href="/users"><a > <p id="back">&larr; ???????????? ???? ???????? ??????</p> </a></Link>
            <p>???????????? ??????????  ????????</p>
        </div>
        <form >
      <div className="au-forms">
      <div className="add-form">
        <p>??????  ??????????</p>
        <input type="text" id="cname" required/>
    </div>
    <div className="add-form">
        <p>?????? ???????????????? ??????????</p>
        <input type="text"  id="cname2" required/>
    </div>
    <div className="add-form">
        <p>  ?????????? ??????????</p>
        <input type="text" id="cname3" required/>
    </div>
    <div className="add-form">
        <p>  ?????????? ????????</p>
        <input type="text" id="cname4" required/>
    </div>
    <div className="add-form">
        <p>  ?????? ??????????????</p>
        <input type="text" id="cname5" required/>
    </div>
    <div className="add-form">
        <p>  ?????? ????????????</p>
        
        <select name="job" id="cname6" required>
          <option value="????????????">????????????</option>
          <option value="?????????? ??????">?????????? ??????</option>
        </select>
    </div>
    <div className="add-form">
        <p>  ??????</p>
        <input type="text" id="cname7" required/>
    </div>
    <div className="add-form">
        <p>  ??????????</p>
        <input type="text" id="cname8" required/>
    </div>
    <div className="add-form">
        <p>  ??????????</p>
        <input type="text" id="cname9" required/>
    </div>
    <div className="add-form">
        <p>  ????????</p>
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
      <p>???? ?????? ??????</p>
    </div>
}
    <div className="info-btn">
            <input type="submit" onClick={submit} value="??????  ?????????? ???????? " />
        </div>
        </form>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;