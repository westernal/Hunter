import Head from 'next/head'
import fetch from "node-fetch";
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

    function editInfo() {
        const btn = document.getElementById("editbtn");
        let inputs =[];
        let input =[];
        j++;
        for (let i = 0; i < 8; i++) {
            inputs[i] = document.getElementsByClassName("edit-inp")[i];
            input[i] = document.getElementsByClassName("edit-inp2")[i];
            console.log(input);
            if (j==1) {
                inputs[i].readOnly = false;
                inputs[i].style.backgroundColor = "white";
                input[i].readOnly = false;
                input[i].style.backgroundColor = "white";
                btn.style.color = "white";
                btn.style.backgroundColor = "#F58222";
            }
            
        }

        if (j==2) {
            for (let i = 0; i < 8; i++) {
               if (inputs[i].value == "") {
                   inputs[i].value = inputs[i].placeholder;
               }
               if (input[i].value == "") {
                input[i].value = inputs[i].placeholder;
            }
            }

            btn.style.color = "#F58222";
            btn.style.backgroundColor = "white";

            let raw = JSON.stringify({
                "firstname": inputs[0].value,
                "lastname":  inputs[1].value,
                "telephoneNumber":  inputs[3].value,
                "province":  inputs[4].value,
                "city":  inputs[5].value,
                "zone":  inputs[6].value,
                "address": {
                  "reciverName":  inputs[0].value + "" + inputs[1].value,
                  "province":  inputs[4].value,
                  "city":  inputs[5].value,
                  "zone":  inputs[6].value,
                  "address":  inputs[7].value,
                  "postalCode": "",
                  "phoneNumber":  inputs[2].value
                }
              });
            
            var x = window.matchMedia("(max-width: 922px)")

            if (x.matches) {
                raw = JSON.stringify({
                    "firstname": input[0].value,
                    "lastname":  input[1].value,
                    "telephoneNumber":  input[3].value,
                    "province":  input[4].value,
                    "city":  input[5].value,
                    "zone":  input[6].value,
                    "address": {
                      "reciverName":  input[0].value + " " +  input[1].value,
                      "province":  input[4].value,
                      "city":  input[5].value,
                      "zone":  input[6].value,
                      "address":  input[7].value,
                      "postalCode": "",
                      "phoneNumber":  input[2].value
                    }
                  });
            }
              
              var requestOptions = {
                method: 'PUT',
                headers: {"content-type":"application/json",
                "x-auth-token":`${localStorage.getItem('token')}`},
                body: raw
    ,
                redirect: 'follow'
              };
              console.log(requestOptions.body);

              fetch("https://hunter-server.oben.design/api/admin/user/update", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            for (let i = 0; i < 8; i++) {
                inputs[i].readOnly = true;
                inputs[i].style.backgroundColor = "#FCFCFC";
                input[i].readOnly = true;
            }
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
        <div className="profile-menu">
            <div className="p-item" id="pspec">
              <input type="text" readOnly placeholder={posts.firstname} className="edit-inp2" />
                
                    <p>نام:</p>
                  
            </div>
            <div className="p-item">
                
                <input type="text" readOnly placeholder={posts.lastname} className="edit-inp2" />
                    <p>نام خانوادگی: </p>
                   
            </div>
            <div className="p-item">
             
                <input type="text" readOnly placeholder={posts.mobileNumber} className="edit-inp2" />
                    <p>شماره همراه:</p>
                   
                
            </div>
            <div className="p-item">
             
                <input type="text" readOnly placeholder={posts.telephoneNumber} className="edit-inp2" />
                    <p>شماره ثابت:</p>
                   
            </div>
            <div className="p-item">
             
                <input type="text" readOnly placeholder={posts.address && posts.address.province} className="edit-inp2" />
                    <p>استان:</p>
                   
            </div>
            <div className="p-item">
            
               <input type="text" readOnly placeholder={posts.address && posts.address.city} className="edit-inp2" />
                    <p>  شهر:</p>
                  
            </div>
            <div className="p-item">
             
                <input type="text" readOnly placeholder={posts.address && posts.address.zone} className="edit-inp2" />
                    <p>منطقه: </p>
                  
            </div>
            <div className="p-item">
             
                <input type="text" readOnly placeholder={posts.address && posts.address.address} className="edit-inp2" />
                    <p>آدرس:</p>
                   
            </div>
           
        </div>
        <div className="dash-title" id="res">
                <p>مشخصات شما</p>
            </div>
        <div className="res-pm">
            
        <div className="add-form">
        <p>نام</p>
        <input type="text" readOnly placeholder={posts.firstname}  className="edit-inp" />
        
    </div>
    <div className="add-form">
        <p> نام خانوادگی</p>
        <input type="text" readOnly placeholder={posts.lastname}  className="edit-inp"  />
        
    </div>
    <div className="add-form">
        <p>شماره همراه</p>
        <input type="text" readOnly placeholder={posts.mobileNumber}  className="edit-inp" />
        
    </div>
    <div className="add-form">
        <p>شماره ثابت</p>
        <input type="text" readOnly placeholder={posts.telephoneNumber}  className="edit-inp"  />
        
    </div>
    <div className="add-form">
        <p>استان</p>
        <input type="text" readOnly placeholder={posts.address && posts.address.province}   className="edit-inp" />
        
    </div>
    <div className="add-form">
        <p>شهر</p>
        <input type="text" readOnly placeholder={posts.address && posts.address.city}   className="edit-inp" />
        
    </div>
    <div className="add-form">
        <p>منطقه</p>
        <input type="text" readOnly  placeholder={posts.address && posts.address.zone}  className="edit-inp" />
        
    </div>
    <div className="add-form">
        <p>آدرس</p>
        <input type="text" readOnly placeholder={posts.address && posts.address.address}  className="edit-inp"  />
        
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