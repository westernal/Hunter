import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";

const Offers = () => {

    const[posts,setPosts] = useState([]);
    const[posts2,setPosts2] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"application/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/promotion", requestOptions)
                    .then(res => res.json())
                    .then(res => {if(res.data){
                 
                        setPosts(res.data.promotions.inactive)
                        setPosts2(res.data.promotions.active)
                        setLoading(false);
                    } 
                        
                    })

                   
        
    
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
    <div className="dash-title" id="main-title">
    <div className="info-btn">
       <Link href="/offers/add"><a> <button>افزودن پیشنهاد ویژه</button> </a></Link>
    </div>
        <p> پیشنهادات ویژه </p>
      
    </div>
    <div className="dash-title">
        <p> پیشنهادات ویژه فعال</p>
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
    <div className="offer-list">
    {
          posts2 && posts2.map(post => {
          return( 
              <Link href={"/offers/"+post._id} key={post._id}><a>
                      <div className="offer-item"  id="active-offer">
            <div className="oi-text">
                <h3>{post.title}</h3>
                <p>{post.description} </p>
            </div>
            <img src={"https://hunter-server.oben.design/" + post.image} alt="offer's picture" />
        </div>
                  </a></Link>
        
          )
           })
       }
      
       
       
    </div>
}
    <div className="dash-title">
        <p>آرشیو پیشنهاد ویژه</p>
    </div>
 
{!loading &&
    <div className="offer-list">
    {
          posts && posts.map(post => {
          return( 
              <Link href={"/offers/"+post._id} key={post._id}><a>
                      <div className="offer-item" >
            <div className="oi-text">
                <h3>{post.title}</h3>
                <p>{post.description} </p>
            </div>
            <img src={"https://hunter-server.oben.design/" + post.image} alt="offer's picture" />
        </div>
                  </a></Link>
        
          )
           })
       }
      
       
       
    </div>
}
  
    </div>
    <Navbar />
    </div>
    </div> );
}


 
export default Offers;