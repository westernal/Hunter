import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import fetch from "node-fetch"

const Users = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/user/customer", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.users))

                   
        
    
    }, [])
    return ( <div className="users">
        <Head>
    <title> کاربران - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> کاربران</p>
    </div>
   <div className="pm">
   <div className="profile-main">
   <div className="dash-title" id="res">
        <p>همه کاربران</p>
    </div>
    <div className="search">
        <div className="search-form">
        <input type="text" placeholder="جستجوی کاربران" />
        <img src="/Images/search.svg" alt="search icon" />
        </div>
    </div>
    <div className="dash-title" id="hid">
        <p>همه کاربران</p>
    </div>
    <div className="dash-result">
                            <div className="dr-nav">
                                <p>ردیف</p>
                                <p>نام و نام خانوادگی</p>
                                <p>شماره همراه</p>
                                <p >دسته بندی</p>
                                <p>وضعیت</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                          
                            {
           posts.map(post => {
          return(
            <div className="dr-row" id="hidden" key={post._id}>
            <p id="drn"></p>
            <p id="dr-date"></p>
            <p className="dr-spec"></p>
            <p className="dr-spec2"></p>
            <p></p>
        </div>
          )
           })
       }
                           
                            </div>
                        </div>
       
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default Users;