import { reduce } from 'next-pwa/cache';
import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const ADD = () => {

    let color;

    async function submit() {
        let name = document.getElementById("cname").value;
        
        let img = document.getElementById("file");

        var formdata = new FormData();
formdata.append("title", name);
formdata.append("image", img.files[0], "file");
formdata.append("color", color);

        var requestOptions = {
            method: 'POST',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch("https://hunter-server.oben.design/api/admin/product/category/add", requestOptions);
        let posts = await res.json();
    }


 

       function openModal1(params) {
        var modal = document.getElementById("myModal");
       var pm = document.getElementsByClassName("pm")[0]
       pm.style.filter = "blur(10px)";
        
        var span = document.getElementsByClassName("close")[0];
          modal.style.display = "block";
       
        
        
        span.onclick = function() {
          modal.style.display = "none";
          pm.style.filter = "blur(0)";
        }
        
        
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            pm.style.filter = "blur(0)";
          }
        }
    }

    function check(e) {
        let check = document.getElementsByClassName("hidden");
       
        for (let i = 0; i < 18; i++) {
            check[i].style.display = "none";
            
        }

        e.target.querySelector("p").style.display = "block";
        
        color = e.target.style.backgroundColor;
        
    }
    return ( <div className="brands">
          <Head>
    <title> دسته بندي ها - هانتر</title>
        </Head>
        <Header />
        <div id="myModal" className="modal">

<div className="modal-content">
  <div className="modal-main">
    <div className="modal-title">
        <p>انتخاب رنگ</p>
    </div>
    <div className="color-list">
        <div className="c1" style={{backgroundColor: "#F83B3B"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c2" style={{backgroundColor: "#FF9900"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c3" style={{backgroundColor: "#F8FD03"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c4" style={{backgroundColor: "#FFD600"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c5" style={{backgroundColor: "#30EF00"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c6" style={{backgroundColor: "#01B533"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c7" style={{backgroundColor: "#0FF3AF"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c8" style={{backgroundColor: "#3DD6F8"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c9" style={{backgroundColor: "#00B4ED"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c10" style={{backgroundColor: "#005DE8"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c11" style={{backgroundColor: "#E089FF"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c12" style={{backgroundColor: "#ED22FF"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c13" style={{backgroundColor: "#BE00ED"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c14" style={{backgroundColor: "#93089F"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c15" style={{backgroundColor: "#FDB5E9"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c16" style={{backgroundColor: "#FF48B6"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c17" style={{backgroundColor: "#FF00B8"}} onClick={check}><p className="hidden">&#10003;</p></div>
        <div className="c18" style={{backgroundColor: "#FF2264"}} onClick={check}><p className="hidden">&#10003;</p></div>
    </div>


<div className="info-btn">
    <button className="close">ثبت</button>
</div>
</div>
</div>
</div>
    <div className="profile-header">
        <p> دسته بندي ها</p>
    </div>
       <div className="pm">
       <div className="profile-main">
        <div className="dash-title">
            <p>افزودن دسته بندی جديد</p>
        </div>
        <div className="add-form">
        <p>نام دسته بندی</p>
        <input type="text" placeholder="مثال: قطعات جلوبندی" id="cname"/>
    </div>
    <div className="add-form">
        <p>انتخاب رنگ </p>
        
            <input type="text" id="cat-sel" onClick={openModal1} placeholder="انتخاب رنگ" readOnly />
        
    </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file" /><p>آپلود تصوير</p></div>
            
        </div>
        
    </div>
    <div className="info-btn">
            <button onClick={submit}>ثبت دسته بندی جدید </button>
        </div>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;