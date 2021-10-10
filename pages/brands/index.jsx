import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import fetch from "node-fetch"



const Brands = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
         
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/product/brand", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.brands))

                   
        
    
    }, [])
    return ( <div className="brands" id="brands-page">
  <Head>
    <title> برند ها - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> برند ها</p>
    </div>
    <div className="pm">
    <div className="profile-main">
    <div className="dash-title">
        <p>  همه برندها</p>
    </div>
    <div className="brand-list">
       {
         posts &&  posts.map(post => {
          return(
            <div className="brand" key={post._id}>
            <img src={"http://193.39.9.72:5000/"+post.image} alt="brand" />
        </div>
          )
           })
       }
      
    </div>
    <div className="info-btn">
     <Link href="/brands/add"><a >  <button>افزودن برند جديد </button> </a></Link>
        </div>
    </div>
    <Navbar />
    </div>
    </div> );
}


 
export default Brands;