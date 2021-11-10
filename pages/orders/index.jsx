import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";
import moment from 'moment-jalaali'

const Orders = () => {
    const[posts,setPosts] = useState([]);
    const[posts2,setPosts2] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(() => { 
      
        
        var requestOptions = {
                    method: 'GET',
                    headers: {"content-type":"aplication/json",
                "x-auth-token":`${localStorage.getItem('token')}`},
                    redirect: 'follow'
                  };
                fetch(`https://hunter-server.oben.design/api/admin/checkout`, requestOptions)
                .then(res => res.json())
                .then(res => {
                    
                    if (res.data) {
                        setPosts(res.data.processing);
                        setPosts2(res.data.other);
                        setLoading(false);
                    }
                }
                )

               
    

}, [])
    return ( <div className="orders">
              <Head>
    <title> سفارشات - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> سفارشات</p>
    </div>
   <div className="pm">
   <div className="profile-main">
    <div className="dash-title">
        <p> سفارش هاي جديد</p>
    </div>
    <div className="product-list">
 
    { loading &&
    <div className="loader">
    <Loader
        type="Rings"
        color="#F58222"
        height={100}
        width={100}
        
      />
    </div>
}
     {posts && posts.map (post =>{ return (
                <div className="pitem" key={post._id}>
                <div className="pitem-text">
                        <p>{post.address.receiverName}</p>
                        <p>{post.products[0].title}</p>
                        <p>{post.orderNumber}</p>
                        <p>{post.deliveryType}</p>
                        <p>{post.amount.total}</p>
                        <p>{post.products[0].price}</p>
                     <Link href={"/orders/new/"+post._id}><a><button>مشاهده جزئيات</button></a></Link>   
                    </div>
                    <div className="pitem-title">
                    <p>نام سفارش دهنده</p>
                        <p>نام محصول</p>
                        <p>كد كالا</p>
                        <p>دسته بندي</p>
                        <p>موجودي</p>
                        <p>قيمت</p>
                        <p>جزئيات</p>
                    </div>
                </div>
     )})}
    </div>
    <div className="dash-title">
        <p>همه سفارشات</p>
    </div>
    <div className="dash-result">
                            <div className="dr-nav">
                                <p>ردیف</p>
                                <p>  شماره سفارش </p>
                                <p> تاریخ سفارش</p>
                                <p > مبلغ کل</p>
                                <p>وضعیت</p>
                                <p>جزئيات</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                         {posts2 && posts2.map((post,index) => {
                             return(
                                <div className="dr-row" key={post._id} >
                                <p id="drn">{index + 1}</p>
                                <p id="dr-date">{post.orderNumber}</p>
                                <p className="dr-spec">{ moment(post.createdAt, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')} </p>
                                <p className="dr-spec2">{post.amount.total}</p>
                                <p href="#"  id="deleter">{post.status} </p>
                                <Link href={"/orders/"+ post._id}><a><p>مشاهده جزئيات</p></a></Link>
                            </div>
                             )
                         })}
                           
                            </div>
                        </div>
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default Orders;