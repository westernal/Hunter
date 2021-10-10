import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'

const Offers = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/promotion?page=1&limit=10", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.promotions))

                   
        
    
    }, [])
    return ( <div className="offers">
            <Head>
    <title>    طرح های شگفت انگیز و جوایز - هانتر</title>
        </Head>
        <Header />
        <div className="profile-header">
        <p>  طرح های شگفت انگیز و جوایز</p>
    </div>
    <div className="pm">
    <div className="profile-main">
    <div className="dash-title">
        <p>آرشیو پیشنهاد ویژه</p>
    </div>
    <div className="offer-list">
    {
          posts && posts.map(post => {
          return(
            <div className="offer-item">
            <div className="oi-text">
                <h3>{post.title}</h3>
                <p>{post.description} </p>
            </div>
            <img src={post.thumbnail} alt="offer's picture" />
        </div>
          )
           })
       }
      
       
       
    </div>
    <div className="info-btn">
       <Link href="/offers/add"><a> <button>افزودن پیشنهاد ویژه</button> </a></Link>
    </div>
    </div>
    <Navbar />
    </div>
    </div> );
}


 
export default Offers;