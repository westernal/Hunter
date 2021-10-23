import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from 'react'
import { DatePicker } from "jalali-react-datepicker";
import moment from 'moment-jalaali'
import Loader from "react-loader-spinner";

const Offer = () => {
    const Router = useRouter();
    let id = Router.query.id;
    
    const[post,setPost] = useState([]);
    const [startDate, setStartDate] = useState(new moment());
    const [startDate2, setStartDate2] = useState(new moment());
    const[loading,setLoading] = useState(false);
  
    useEffect(() => { 
      
      if(!Router.isReady) return;
        var requestOptions = {
                    method: 'GET',
                    headers: {"content-type":"application/json",
                "x-auth-token":`${localStorage.getItem('token')}`},
                    redirect: 'follow'
                  };
                fetch(`https://hunter-server.oben.design/api/admin/promotion/${Router.query.id}`, requestOptions)
                .then(res => res.json())
                .then(res => {
                 
                    if (res.data) {
                        setPost(res.data.promotion);
                     
                      
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
        
        fetch(`https://hunter-server.oben.design/api/admin/promotion/${Router.query.id}`, requestOptions)
          .then(response => response.text())

          .catch(error => console.log('error', error));
  }
  
      function x(e) {
         
        let img2 = document.getElementsByClassName("edit-img")[0];
        img2.src =   URL.createObjectURL(e.target.files[0]);
       
          document.querySelector(".ai1 p").innerText = e.target.files[0].name;
       
      }

      function x2(e) {
         
       
       
          document.getElementById("pdf-p").innerText = e.target.files[0].name;
       
      }
      async function submit() {
 
        setLoading(true);
  
           let name = document.getElementById("oname");
           let date1 = document.getElementsByClassName("otime1")[0].value;
           let date2 =  document.getElementsByClassName("otime2")[0].value;
           let text = document.getElementById("otext");
           let img = document.getElementById("file");
           let pdf = document.getElementById("file2");
    
           
          if (name.value == "") {
            name.value = name.placeholder;
          }

          if (text.value == "") {
            text.value = text.placeholder;
          }
           var formdata = new FormData();
           formdata.append("title", name.value);
           formdata.append("description", text.value);
           formdata.append("start", moment(date1, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DTHH:mm:ss'));
           formdata.append("end", moment(date2, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DTHH:mm:ss'));
         
           if (img.files[0]) {
           formdata.append("image", img.files[0]);
             
           }

           if (pdf.files[0]) {
            formdata.append("pdf", pdf.files[0]);
           }
  
          var requestOptions = {
              method: 'PUT',
              headers: {  "x-auth-token":`${localStorage.getItem('token')}`},
              body:formdata,
              redirect: 'follow'
            };
          let res = await fetch(`https://hunter-server.oben.design/api/admin/promotion/${Router.query.id}`, requestOptions);
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
  
 
    return ( <div className="offers">
              <Head>
    <title>    طرح های شگفت انگیز و جوایز - هانتر</title>
        </Head>
        <Header />
        <div id="myModal3" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>    این طرح  حذف خواهد شد. مطمئن هستید؟ 


</p>
<div className="modal-btn">
   <Link href="/offers"><a ><button onClick={xdelete} id="delBtn">تایید</button></a></Link> 
   <a ><button className="close">انصراف</button></a>
</div>


</div>
</div>
</div>
        <div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>پیشنهاد  ویرایش شد </p>
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
            <p>ویرایش پیشنهاد ویژه </p>
        </div>
        <div className="add-form">
        <p>   عنوان  </p>
        <input type="text" placeholder={post && post.title} id="oname"/>
            </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="aii">
     <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  onChange={x} /><p>تغییر تصوير</p></div>
            
        </div>
        <img src={post && "https://hunter-server.oben.design/" + post.image} alt="image" className="edit-img" />
     </div>
        
    </div>
    <div className="add-form" >
        <p>   متن پیشنهاد ویژه  </p>
        <input type="textarea" placeholder={post && post.description} id="otext" />
        
    </div>
    <div className="banner-res">
       <div className="add-form">
        <p> شروع بازه زمانی  </p>
        <DatePicker  className="otime1"  isGregorian={false}   placeholder={post && moment(post.start, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')} onChange={(date) => setStartDate(date)}/>
        
    </div>
    <div className="add-form">
        <p>  پایان بازه زمانی </p>
        <DatePicker className="otime2"  isGregorian={false} selected={startDate2}  placeholder={post && moment(post.end, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')} onChange={(date) => setStartDate2(date)} />
        
    </div>
       </div>
    <div className="add-img">
        <p>انتخاب فایل PDF</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file2" type="file" onChange={x2} /><p id="pdf-p">تغییر PDF</p></div>
            
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
    <button onClick={openModal3} id="del-btn">حذف پیشنهاد   </button>
            <button onClick={submit}> ویرایش  پیشنهاد   </button>
        
        </div>
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default Offer;