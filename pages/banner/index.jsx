import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";


const Index = () => {

    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/banner", requestOptions)
                    .then(res => res.json())
                    .then(res => {if(res.data){setPosts(res.data.banners);
                    
                        setLoading(false);
                    }
                    })

                   
        
    
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
            <div className="info-btn">
              <Link href="/banner/add"><a>  <button>افزودن بنر جدید</button> </a></Link>
            </div>
                <p>آرشیو بنرها</p>
               
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
            <div className="banner-list">
            {
        posts &&   posts.map((post,index) => {
          return(
            <Link href={"/banner/" + post._id} key={post._id}><a>
                    <div className={index<4 ? "banner"+index : "banner" + (index-3)} >
            <img src={"https://hunter-server.oben.design/" + post.image} alt="banner"  id="bimg"/>
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
 
export default Index;