import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react';
import Loader from "react-loader-spinner";

const Products = () => {

    const[posts,setPosts] = useState([]);
    let Search = [];
    const[Search2,setSearch2] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/product", requestOptions)
                    .then(res => res.json())
                    .then(res => {
                        if (res.data) {
                            setPosts(res.data.products);
                            setSearch2(res.data.products);
                            setLoading(false);
                        }
                    })

                   
        
    
    }, [])

    function search() {
        Search = [];
         let input = document.getElementById("searchBox").value.toUpperCase();
         for (let i = 0; i < posts.length; i++) {
             if (posts[i].title) {
                 
          
             if (posts[i].title.toUpperCase().indexOf(input) > -1 ) {
                 Search.push(posts[i]);
                 setSearch2(Search);
             }
             setSearch2(Search); 
         }
 
         if (input == "") {
             setSearch2(posts);
         }
           
         }
 
         
     }
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
        <input type="text" placeholder="جستجوی محصولات" onChange={search} id="searchBox" />
        <img src="/Images/search.svg" alt="search icon" />
        </div>
    </div>
    <div className="product-res">
    <div className="info-btn">
       <Link href="/products/add"><a> <button>افزودن محصول</button> </a></Link>
        </div>
        <div className="dash-title">
        <p>همه محصولات</p>
    </div>
    </div>
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
{!loading &&
    <div className="product-list" id="hid">
        {
            Search2 && Search2.map(post => {
                return(
                    <div className="pitem" key={post._id}>
        <div className="pitem-text">
        <img src={post.images && "https://hunter-server.oben.design/"+post.images[0].image} alt="product" id="js"/>
            <p>{post.title}</p>
            <p>{post.productNumber} </p>
            <p>{post.category[0] && post.category[0].title} </p>
            <p>{post.stock} </p>
            <p>{post.price} </p>
           <Link href={"/products/"+ post._id}><a ><button>مشاهده جزئيات</button></a></Link>     
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
}
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
                            {!loading &&
                            <div className="dr-rows" id="dr-rows">
                              
                            {
        Search2 &&   Search2.map((post,index) => {
          return(
            <div className="dr-row" id="hidden" key={post._id}>
            <p id="js">{index+1}</p>
            <img src={post.images && "https://hunter-server.oben.design/"+post.images[0].image} alt="product" id="js"/>
            <p>{post.title}</p>
            <p>{post.productNumber} </p>
            <p>{post.category[0] && post.category[0].title} </p>
            <p>{post.stock} </p>
            <p>{post.price} </p>
            <Link href={"/products/"+ post._id}><a ><p>مشاهده جزئيات</p></a></Link>     
           </div>
          )
           })
       }

               
                           
                            </div>
                           }
                        </div>
    </div>
    <Navbar />
    </div>
    </div> );
}


 
export default Products;