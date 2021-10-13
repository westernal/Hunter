import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import { useRouter } from "next/dist/client/router";


const User = () => {

    const Router = useRouter();

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch(`https://hunter-server.oben.design/api/admin/user/customer/${Router.query.id}`, requestOptions)
                    .then(res => res.json())
                    .then(res => {
                        if (res.data) {
                            setPosts(res.data.user);
                        }
                    }
                    )

                   
        
    
    }, [])
    
    return ( <div className="user">
         <Head>
    <title> کاربران - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> کاربران</p>
    </div>
  <div className="pm">
  <div className="profile-main">
    <div className="dash-title">
        <p>اطلاعات شخصی</p>
     
    </div>
    <div className="user-pi">
    <div className="personal-info">
            <div className="personal-text">
                <p id="infspec">{posts.name} </p>
                <p>نام و نام خانوادگی:</p>
                <p id="infspec">{posts.storeName}</p>
                <p>نام فروشگاه:</p>
                <p id="infspec">{posts.mobileNumber}</p>
                <p>شماره همراه:</p>
                <p id="infspec">{posts.telephoneNumber}</p>
                <p>شماره ثابت:</p>
                <p id="infspec">{posts.activity}</p>
                <p>نوع فعالیت:</p>
                <p id="infspec">{posts.address && posts.address.address}</p>
                <p>آدرس:</p>
            </div>
            <div className="personal-pic">
                <img src={"https://hunter-server.oben.design/"+posts.image} alt="user profile picture" />
            </div>
        </div>
    </div>
        {/* <div className="dash-title">
        <p>فاکتور ها</p>
    </div>
    <div className="user-orders">
        <div className="uorder">
            <div className="order-title">
                فاکتور شماره 12345
            </div>
            <div className="order-num">
                <p id="infspec">12</p>
                <p>جمع تعداد</p>
            </div>
            <div className="order-price">
                <p id="ospec">3,560,000 تومان</p>
                <p>جمع مبلغ</p>
            </div>
        </div>
    </div> */}
    </div>
    <Navbar />
  </div>
    </div> );
}
 
export default User;