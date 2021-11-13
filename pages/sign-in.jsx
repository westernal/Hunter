import React from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router";

const LogIn = () => {

    const Router = useRouter();
    
    function logIn(e) {
     
        const number = document.getElementById("number").value;
        const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
        
        
        var requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              mobileNumber : number
          }),
          redirect: 'follow',
          agent: httpsAgent
        };

        

        
        
        fetch(`https://server.hunterpartapp.com/api/admin/user/signInByMobileNumber`, requestOptions)
          .then(response => {response.json();
          if (response.ok) {
              
            document.getElementById("after").style.display = "block";
            document.getElementById("before").style.display = "none";
            
           }
          
           if (!response.ok) {
            document.getElementById('error').style.display = "block";
          }})
          .then(result =>  console.log(result))
          .catch(error => console.log('error', error))
      }

      function inside() {
          const numbers = document.getElementsByClassName("scode");
          const number = document.getElementById("number").value;
          var code = "";
          
          for (let i = 0; i < numbers.length; i++) {
            code = code + numbers[i].value;
              
          }
          const https = require('https');

          const httpsAgent = new https.Agent({
              rejectUnauthorized: false,
            });
          var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobileNumber : number,
                code : code
            }),
            redirect: 'follow',
            agent: httpsAgent
          };
          
          fetch("https://server.hunterpartapp.com/api/admin/user/validatecode/", requestOptions)
            .then(response =>response.json() )
            .then(result => {
                
                if (result.msg) {
                  document.getElementById('error2').style.display = "block"
                }
                    if (result != undefined) {
                     
                      localStorage.setItem('token', result.data.token);
                     
                   
                          Router.push('/');
                     
                      
                      
                      
                    }
               
                    
                    
                    
                   })
            .catch(error =>  document.getElementById('error2').style.display = "block");
      }


     function nextInput(e) {

          if (e.keyCode==8 && e.target.previousSibling != null) {
            e.target.previousSibling.focus();
          }
            if (e.target.nextSibling != null && e.keyCode != 8) {
                e.target.nextSibling.focus();
            }
           
        }
        
    
   

 
    return ( 
        <div className="login-page">
           
            
             
            <div className="su-main">
                <div className="su-one">
                    <div className="su-forms" id="before">
                        <div className="suf-header">
                          
                        
                        <h3>خوش آمدید</h3>
                        </div>
                        <p id="error">شماره ثبت نشده است</p>
                        <input type="text" placeholder="شماره تلفن همراه" id="number"/>
                      <div className="suf-btn"> <button  onClick={logIn}>ورود </button></div> 
                      
                       
                    </div>
                    <div className="su-forms" id="after">
                        <div className="suf-header">
                       
                        <h3>خوش آمدید</h3>
                        </div>
                        
                        <h4>کد ارسال شده به شماره موبایلتان را وارد نمایید</h4>
                        <p id="error2">کد وارد شده اشتباه است</p>
                        <div className="sent-code">
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        <input type="number" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onKeyUp={nextInput} className="scode"/>
                        </div>
                      <div className="suf-btn"> <button onClick={inside}> ورود</button></div> 
                       
                       
                    </div>
                   
                </div>
                <div className="su-bck">
                <img src="/Images/hunterpakhsh-logo 1.svg"  />
            </div>
            </div>
            </div>
        
     );
}
 
export default LogIn;