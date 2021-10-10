import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'


const Index = () => {

    const[posts,setPosts] = useState([]);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("http://193.39.9.72:5000/api/admin/banner", requestOptions)
                    .then(res => res.json())
                    .then(res => {setPosts(res.data.banners);
                    console.log(res);})

                   
        
    
    }, [])
    return ( <div className="banner-page">
        <Head>
        <title> بنر پیشنهاد ویژه - هانتر</title>
            </Head>
            <Header />
            <div className="profile-header">
            <p> بنر پیشنهاد ویژه</p>
        </div>
        
    <div className="pm">
    <div className="profile-main">
            <div className="dash-title">
                <p>آرشیو بنرها</p>
            </div>
            <div className="banner-list">
            {
        posts &&   posts.map((post,index) => {
          return(
            <div className={index<4 ? "banner"+index : "banner" + (index-3)} key={post._id}>
            <div className="banner-line"></div>
            <p id="bspec">TOUCHABLE BANNER</p>
            <p>بنر پیشنهاد ویژه</p>
        </div>
          )
           })
       }
               
            
            </div>
            <div className="info-btn">
              <Link href="/banner/add"><a>  <button>افزودن بنر جدید</button> </a></Link>
            </div>
        </div>
        <Navbar />
    </div>
    </div> );
}
 
export default Index;