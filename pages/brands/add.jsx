import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import fetch from "node-fetch"

const ADD = () => {
let img;
    function x(e) {
        img = e.target.files[0];
    }

     function submit() {
        console.log("hi");
        let name = document.getElementById("bname").value;
        console.log(img);

        var formdata = new FormData();
        formdata.append("title", name);
        formdata.append("image", img);
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        var requestOptions = {
            method: 'POST',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
          console.log(requestOptions.body);
         fetch("http://193.39.9.72:5000/api/admin/product/brand/add", requestOptions)
         .then(res => {res.json();
        console.log(res);})
         .then(res => console.log(res))
         .catch(error => console.log('error', error));
    }
    
    return ( <div className="add-brand">
        <Head>
    <title>   برند ها - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> برند ها</p>
    </div>
       <div className="pm">
       <div className="profile-main">
    <div className="dash-title">
        <p>   افزودن برند جديد</p>
    </div>
    <div className="add-form">
        <p>نام برند</p>
        <input type="text" placeholder="مثال: فرنتك" id="bname" />
        
    </div>
    <div className="add-img">
        <p>انتخاب تصوير</p>
        <div className="ai">
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file" onChange={x}/><p>آپلود تصوير</p></div>
            
        </div>
        
    </div>
    <div className="info-btn">
        <button onClick={submit}>ثبت برند جديد </button>
        </div>
    </div>
    <Navbar />
       </div>
    </div> );
}
 
export default ADD;