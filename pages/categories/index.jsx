import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import fetch from "node-fetch"

const Categories = () => {
    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/product/category", requestOptions)
                    .then(res => res.json())
                    .then(res => {setPosts(res.data.categories)})

                    
        
    
    }, [])
    return ( <div className="brands" id="cat-page">
  <Head>
    <title> دسته بندي ها - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> دسته بندي ها</p>
    </div>
    <div className="pm">
    <div className="profile-main">
    <div className="dash-title">
        <p>  همه دسته بندي ها</p>
    </div>
    <div className="brand-list">
    {
           posts.map(post => {
          return(
            <div className="brand" key={post._id}>
            <img src={"http://193.39.9.72:5000/"+post.image} alt="category" />
        </div>
          )
           })
       }
       
    </div>
    <div className="info-btn">
      <Link href="/categories/add"><a >  <button>افزودن دسته بندي جديد </button> </a></Link>
        </div>
    </div>
    <Navbar />
    </div>
    </div> );
}


 
export default Categories;