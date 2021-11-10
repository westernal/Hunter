
import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";

const ADD = () => {

    let color;
    const Router = useRouter();
    let id = Router.query.id;
    const[posts,setPosts] = useState([]);
    const[post,setPost] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => { 
      
      if(!Router.isReady) return;
        var requestOptions = {
                    method: 'GET',
                    headers: {"content-type":"application/json",
                "x-auth-token":`${localStorage.getItem('token')}`},
                    redirect: 'follow'
                  };
                fetch(`https://hunter-server.oben.design/api/admin/product/category`, requestOptions)
                .then(res => res.json())
                .then(res => {
                 
                    if (res.data) {
                        setPosts(res.data.categories);
                        setPost(res.data.categories.filter(post => post._id == id));
                     
                    }
                }
                )

               
    

}, [Router.isReady])

function xdelete() {
    var requestOptions = {
        method: 'DELETE',
        headers:  {"content-type":"aplication/json",
        "x-auth-token":`${localStorage.getItem('token')}`},
        redirect: 'follow'
      };
      
      fetch(`https://hunter-server.oben.design/api/admin/product/category/${Router.query.id}`, requestOptions)
        .then(response => response.text())

        .catch(error => console.log('error', error));
}

    function x(e) {
       
      let img2 = document.getElementsByClassName("edit-img")[0];
      img2.src =   URL.createObjectURL(e.target.files[0]);
     
        document.querySelector(".ai1 p").innerText = e.target.files[0].name;
     
    }
    async function submit() {

         
         
      setLoading(true);
        let name = document.getElementById("cname");
        if (name=="") {
          name.value == name.placeholder
        }
        if (color=="") {
          color == color.placeholder
        }
        let img = document.getElementById("file");

        var formdata = new FormData();
formdata.append("title", name.value);
if (img.files[0]) {
  formdata.append("image", img.files[0], "file");
}
formdata.append("color", color);

        var requestOptions = {
            method: 'PUT',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch(`https://hunter-server.oben.design/api/admin/product/category/${Router.query.id}`, requestOptions);
        let posts = await res.json();
        if (res.status == 200) {
          setLoading(false);
          var modal = document.getElementById("myModal2");
          var pm = document.getElementsByClassName("pm")[0]
          pm.style.filter = "blur(10px)";
           
           var span = document.getElementsByClassName("close")[1];
             modal.style.display = "block";
          
           
           
           span.onclick = function() {
             modal.style.display = "none";
             pm.style.filter = "blur(0)";
           }
        }
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

    function openModal3() {
        var modal = document.getElementById("myModal3");
       var pm = document.getElementsByClassName("pm")[0]
       pm.style.filter = "blur(10px)";
        
        var span = document.getElementsByClassName("close")[2];
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
        document.getElementById("cat-sel").value = color;
     
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

<div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>  دسته بندی ویرایش شد </p>
<div className="info-btn">
   <Link href="/categories"><a ><button className="close">تایید</button></a></Link> 
</div>


</div>
</div>
</div>

<div id="myModal3" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>    این دسته بندی حذف خواهد شد. مطمئن هستید؟ 


</p>
<div className="modal-btn">
   <Link href="/categories"><a ><button onClick={xdelete} id="delBtn">تایید</button></a></Link> 
   <a ><button className="close">انصراف</button></a>
</div>


</div>
</div>
</div>
    <div className="profile-header">
        <p> دسته بندی ها</p>
    </div>
 
       <div className="pm">
     
       <div className="profile-main">
        <div className="dash-title">
        <Link href="/categories"><a > <p id="back">&larr; بازگشت به صفحه قبل</p> </a></Link>
            <p>ویرایش دسته بندی </p>
        </div>
        <div className="add-form">
        <p>نام دسته بندی</p>
        <input type="text" placeholder={post[0] && post[0].title} id="cname"/>
    </div>
    <div className="add-form">
        <p>انتخاب رنگ </p>
        
            <input type="text" id="cat-sel" onClick={openModal1} placeholder={post[0] && post[0].color} readOnly />
        
    </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="aii">
     <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  onChange={x} /><p>تغییر تصوير</p></div>
            
        </div>
        <img src={post[0] && "https://hunter-server.oben.design/" + post[0].image} alt="image" className="edit-img" />
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
      <p>در حال ویرایش</p>
    </div>
}
    <div className="info-btn">
    <button onClick={openModal3} id="del-btn">حذف دسته بندی  </button>
            <button onClick={submit}> ویرایش دسته بندی   </button>
        
        </div>
    </div>
    
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;