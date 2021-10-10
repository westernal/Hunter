import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import fetch from "node-fetch"

const Products = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/product", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.products))

                   
        
    
    }, [])
    return ( <div className="products">
             <Head>
    <title> محصولات - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> محصولات</p>
    </div>
    <div className="pm">
    <div className="profile-main">
    <div className="search">
        <div className="search-form">
        <input type="text" placeholder="جستجوی کاربران" />
        <img src="/Images/search.svg" alt="search icon" />
        </div>
    </div>
    <div className="product-res">
    <div className="info-btn">
       <Link href="/products/add"><a> <button>ویرایش اطلاعات</button> </a></Link>
        </div>
        <div className="dash-title">
        <p>همه محصولات</p>
    </div>
    </div>
    
    <div className="product-list" id="hid">
        {
            posts && posts.map(post => {
                return(
                    <div className="pitem" key={post._id}>
        <div className="pitem-text">
        <img src={"http://193.39.9.72:5000/"+post.images[0].image} alt="product" id="js"/>
            <p>{post.title}</p>
            <p>{post.productNumber} </p>
            <p>{post.category[0].title} </p>
            <p>{post.stock} </p>
            <p>{post.price} </p>
                <button>مشاهده جزئيات</button>
            </div>
            <div className="pitem-title">
            <p>تصوير</p>
                <p>نام محصول</p>
                <p>كد كالا</p>
                <p>دسته بندي</p>
                <p>موجودي</p>
                <p>قيمت</p>
                <p>جزئيات</p>
            </div>
        </div>
                )
            })
        }
    </div>
    <div className="dash-result" id="res">
                            <div className="dr-nav">
                                <p>ردیف</p>
                                <p>تصوير</p>
                                <p>نام محصول  </p>
                                <p> کد کالا</p>
                                <p >دسته بندی</p>
                                <p>موجودی</p>
                                <p>قیمت</p>
                                <p>جزئيات</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                            {
        posts &&   posts.map((post,index) => {
          return(
            <div className="dr-row" id="hidden" key={post._id}>
            <p id="js">{index}</p>
            <img src={"http://193.39.9.72:5000/"+post.images[0].image} alt="product" id="js"/>
            <p>{post.title}</p>
            <p>{post.productNumber} </p>
            <p>{post.category[0].title} </p>
            <p>{post.stock} </p>
            <p>{post.price} </p>
            <p>مشاهده جزئيات</p>
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


 
export default Products;