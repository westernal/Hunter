import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useEffect,useState } from 'react'


const Information = () => {
   let j = 0;
    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"application/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/user", requestOptions)
                    .then(res => res.json())
                    .then(res => {if (res.data) {
                      
                        setPosts(res.data.user);  
                    }})

                   
        
    
    }, [])

    function visible() {
        var x = document.getElementsByClassName("edit-inp")[1];
        var y = document.getElementsByClassName("edit-inp")[2];
        var see = document.getElementById("pwImg");
        var dSee = document.getElementById("pwImg2");
        var see2 = document.getElementById("pwImg3");
        var dSee2 = document.getElementById("pwImg4");
        if (x.type === "password") {
          x.type = "text";
          see.style.display = "none";
          dSee.style.display = "block";
          see2.style.display = "none";
          dSee2.style.display = "block";
        } else {
          x.type = "password";
          see.style.display = "block";
          dSee.style.display = "none";
          see2.style.display = "block";
          dSee2.style.display = "none";
        }
        if (y.type === "password") {
            y.type = "text";
            see.style.display = "none";
            dSee.style.display = "block";
            see2.style.display = "none";
            dSee2.style.display = "block";
          } else {
            y.type = "password";
            see.style.display = "block";
            dSee.style.display = "none";
            see2.style.display = "block";
            dSee2.style.display = "none";
          }
    }

    function editInfo() {
        const btn = document.getElementById("editbtn");
        let inputs =[];
        var visible = document.getElementById("pwImg");
        var notVisible = document.getElementById("pwImg2");
        var visible2 = document.getElementById("pwImg3");
        var notVisible2 = document.getElementById("pwImg4");

        visible.style.opacity = 1;
        notVisible.style.opacity = 1;
        visible2.style.opacity = 1;
        notVisible2.style.opacity = 1;
        
        j++;
        for (let i = 0; i < 3; i++) {
            inputs[i] = document.getElementsByClassName("edit-inp")[i];
     
          
            if (j==1 && i>0) {
                inputs[i].readOnly = false;
                inputs[i].style.backgroundColor = "white";
                document.getElementById("repeat-pw").style.display="block"
                btn.style.color = "white";
                btn.style.backgroundColor = "#F58222";
            }
            
        }

        if (j==2) {
    

         if (inputs[2].value == inputs[1].value) {
            for (let i = 0; i < 3; i++) {
                if (inputs[i].value == "") {
                    inputs[i].value = inputs[i].placeholder;
                }
                document.getElementById("repeat-pw").style.display="none";
       
             }
 
             btn.style.color = "#F58222";
             btn.style.backgroundColor = "white";
            let raw = JSON.stringify({
                "password" : inputs[1].value,
            
                
                
              });
            
         
              
              var requestOptions = {
                method: 'PUT',
                headers: {"content-type":"application/json",
                "x-auth-token":`${localStorage.getItem('token')}`},
                body: raw
    ,
                redirect: 'follow'
              };
             
              fetch("https://hunter-server.oben.design/api/admin/user/update", requestOptions)
                .then(response => response.json())
                
                .catch(error => console.log('error', error));
            for (let i = 0; i < 3; i++) {
                inputs[i].readOnly = true;
                inputs[i].style.backgroundColor = "#FCFCFC";
                
            }
         }else document.getElementById("error").style.display= "block"
            j=0;
        }


        
    }
    return ( <div className="information">
    <Head>
    <title>مشخصات شما - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p>مشخصات شما</p>
    </div>
    <div className="pm">
    <div className="profile-main">
  
        <div className="dash-title" >
                <p>مشخصات شما</p>
            </div>
        <div className="res-pm">
            
   
    <div className="add-form">
        <p>شماره همراه</p>
        <input type="text" readOnly placeholder={posts.mobileNumber}  className="edit-inp" />
        
    </div>
  
    <div className="add-form">
        <p>رمز عبور</p>
        <div className="pw-inp">
            <img src="/Images/bi_eye-slash.svg" alt="password" id="pwImg" onClick={visible}  />
            <img src="/Images/Group.svg" alt="password" id="pwImg2"  onClick={visible}/>
        <input type="password" readOnly    className="edit-inp" />
        </div>
        
    </div>

    <div className="add-form" id="repeat-pw">
        <p>تکرار رمز عبور </p>
        <div className="pw-inp">
        <img src="/Images/bi_eye-slash.svg" alt="password" id="pwImg3" onClick={visible} />
            <img src="/Images/Group.svg" alt="password" id="pwImg4" onClick={visible}/>
        <input type="password" readOnly   className="edit-inp" />
        </div>
        <p id="error">رمز عبور باید با تکرار آن برابر باشد.</p>
    </div>

        </div>
        <div className="info-btn">
        <button onClick={editInfo} id="editbtn">ویرایش اطلاعات</button>
        </div>
    </div>
    <Navbar />
    </div>
</div> );
}


 
export default Information;