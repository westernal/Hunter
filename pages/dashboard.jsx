import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react';

const Dashboard = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/init", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res))

                   
        
    
    }, [])
    return ( <div className="dashboard">
        <Head>
        <title>   پیشخوان - هانتر</title>
            </Head>
            <Header />
            <div className="profile-header">
            <p>پیشخوان</p>
        </div>
    <div className="pm">
    <div className="profile-main">
        <div className="dash-title">
            <p>پیشخوان</p>
        </div>
            <div className="dashboard-main">
           <Link href="/orders"><a>     <div className="dm" id="dm1">
                    <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/bag-tick.svg" alt="bag tick" />
                   
                    <p>تعداد  سفارش های جدید  </p>
                    <p id="dmspec">{posts.newOrders}</p>
                </div>
                </a></Link>
                <Link href="/products"><a>   <div className="dm" id="dm2">
                <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/Price Tag.svg" alt="Price tag" />
                    <p>تعداد محصولات</p>
                    <p id="dmspec">{posts.products}</p>
                </div>
                </a></Link>
                <Link href="/orders"><a>   <div className="dm" id="dm3">
                <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/receipt-item.svg" alt="receipt-item" />
                    <p> تعداد کل سفارش</p>
                    <p id="dmspec">{posts.orders}</p>
                </div>
                </a></Link>
            </div>
           
        </div>
        <Navbar />
    </div>
    </div> );
}
 
export default Dashboard;