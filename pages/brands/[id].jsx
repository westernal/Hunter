
import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";

const ADD = () => {

  const Router = useRouter();
  let id = Router.query.id;
  const[posts,setPosts] = useState([]);
  const[post,setPost] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(() => { 
    
    if(!Router.isReady) return;
      var requestOptions = {
                  method: 'GET',
                  headers: {"content-type":"aplication/json",
              "x-auth-token":`${localStorage.getItem('token')}`},
                  redirect: 'follow'
                };
              fetch(`https://server.hunterpartapp.com/api/admin/product/brand`, requestOptions)
              .then(res => res.json())
              .then(res => {
               
                  if (res.data) {
                      setPosts(res.data.brands);
                      setPost(res.data.brands.filter(post => post._id == id));
                    
                  }
              }
              )

             
  

}, [Router.isReady])

function xdelete() {
    var requestOptions = {
        method: 'DELETE',
        headers:  {"content-type":"application/json",
        "x-auth-token":`${localStorage.getItem('token')}`},
        redirect: 'follow'
      };
      
      fetch(`https://server.hunterpartapp.com/api/admin/product/brand/${Router.query.id}`, requestOptions)
        .then(response => {response.text();
        if (response.status == 200) {
          Router.push("/brands");
        }
        })
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
        
        let img = document.getElementById("file");

      if (name.value == "") {
        name.value = name.placeholder;
      }

        var formdata = new FormData();
formdata.append("title", name.value);

if (img.files[0]) {
  formdata.append("image", img.files[0], "file");
}

        var requestOptions = {
            method: 'PUT',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch(`https://server.hunterpartapp.com/api/admin/product/brand/${Router.query.id}`, requestOptions);
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


 


    function openModal3() {
        var modal = document.getElementById("myModal3");
       var pm = document.getElementsByClassName("pm")[0]
       pm.style.filter = "blur(10px)";
        
        var span = document.getElementsByClassName("close")[1];
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

 
    return ( <div className="brands">
          <Head>
    <title> ???????? ???????? ???? - ??????????</title>
        </Head>
        <Header />


<div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>  ????????  ???????????? ???? </p>
<div className="info-btn">
   <Link href="/brands"><a ><button className="close">??????????</button></a></Link> 
</div>


</div>
</div>
</div>

<div id="myModal3" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>    ?????? ????????  ?????? ?????????? ????. ?????????? ???????????? 


</p>
<div className="modal-btn">
   <a ><button onClick={xdelete} id="delBtn">??????????</button></a>
   <a ><button className="close">????????????</button></a>
</div>


</div>
</div>
</div>
    <div className="profile-header">
        <p> ????????  ????</p>
    </div>
       <div className="pm">
       <div className="profile-main">
        <div className="dash-title">
        <Link href="/brands"><a > <p id="back">&larr; ???????????? ???? ???????? ??????</p> </a></Link>
            <p>???????????? ????????  </p>
        </div>
        <div className="add-form">
        <p>?????? ???????? </p>
        <input type="text" placeholder={post[0] && post[0].title} id="cname"/>
    </div>
  
    <div className="add-img">
        <p>???????????? ??????????</p>
        <div className="aii">
     <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  onChange={x} /><p>?????????? ??????????</p></div>
            
        </div>
        <img src={post[0] && "https://server.hunterpartapp.com/" + post[0].image} alt="image" className="edit-img" />
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
      <p>???? ?????? ????????????</p>
    </div>
}
    <div className="info-btn">
    <button onClick={openModal3} id="del-btn">?????? ????????   </button>
            <button onClick={submit}>   ???????????? ???????? </button>
        
        </div>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;