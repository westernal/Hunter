import Head from 'next/head'
import fetch from "node-fetch";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useEffect,useState } from 'react'


const Information = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/user", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.user))

                   
        
    
    }, [])
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
               <p id="infspec">{posts.firstname}</p>
                
                    <p>نام:</p>
                  
            </div>
            <div className="p-item">
                <p id="infspec">{posts.lastname}</p>
                
                    <p>نام خانوادگی: </p>
                   
            </div>
            <div className="p-item">
                <p id="infspec">{posts.mobileNumber}</p>
                
                    <p>شماره همراه:</p>
                   
                
            </div>
            <div className="p-item">
                <p id="infspec">{posts.telephoneNumber}</p>
                
                    <p>شماره ثابت:</p>
                   
            </div>
            <div className="p-item">
                <p id="infspec">{posts.address.province}</p>
                
                    <p>استان:</p>
                   
            </div>
            <div className="p-item">
               <p id="infspec">{posts.address.city}</p>
                
                    <p>  شهر:</p>
                  
            </div>
            <div className="p-item">
                <p id="infspec">{posts.address.zone}</p>
               
                    <p>منطقه: </p>
                  
            </div>
            <div className="p-item">
                <p id="infspec">{posts.address.address}</p>
                
                    <p>آدرس:</p>
                   
            </div>
           
        </div>
        <div className="dash-title" id="res">
                <p>مشخصات شما</p>
            </div>
        <div className="res-pm">
            
        <div className="add-form">
        <p>نام</p>
        <input type="text" readOnly value={posts.firstname}  />
        
    </div>
    <div className="add-form">
        <p> نام خانوادگی</p>
        <input type="text" readOnly value={posts.lastname}  />
        
    </div>
    <div className="add-form">
        <p>شماره همراه</p>
        <input type="text" readOnly value={posts.mobileNumber} />
        
    </div>
    <div className="add-form">
        <p>شماره ثابت</p>
        <input type="text" readOnly value={posts.telephoneNumber} />
        
    </div>
    <div className="add-form">
        <p>استان</p>
        <input type="text" readOnly value={posts.address.province} />
        
    </div>
    <div className="add-form">
        <p>شهر</p>
        <input type="text" readOnly value={posts.address.city} />
        
    </div>
    <div className="add-form">
        <p>منطقه</p>
        <input type="text" readOnly  value={posts.address.zone}/>
        
    </div>
    <div className="add-form">
        <p>آدرس</p>
        <input type="text" readOnly value={posts.address.address} />
        
    </div>
        </div>
        <div className="info-btn">
        <button>ویرایش اطلاعات</button>
        </div>
    </div>
    <Navbar />
    </div>
</div> );
}


 
export default Information;