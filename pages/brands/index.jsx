import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";
 


const Brands = () => {

    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
         
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://server.hunterpartapp.com/api/admin/product/brand", requestOptions)
                    .then(res => res.json())
                    .then(res => {if (res.data) {
                      setPosts(res.data.brands)
                      setLoading(false);
                    } })

                   
        
    
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
    <div className="info-btn">
     <Link href="/brands/add"><a >  <button>افزودن برند جديد </button> </a></Link>
        </div>
        <p>  همه برندها</p>

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
    <div className="brand-list">
 { posts &&
           posts.map(post => {
          return(
            <Link href={"/brands/" + post._id} key={post._id}><a >         <div className="brand2">
            <div className="brand"  style={{border: `1px solid ${post.color}`}}>
            <img src={"https://server.hunterpartapp.com/"+post.image} alt="category" />
        </div>
        <p>{post.title}</p>
        </div></a></Link>
   
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


 
export default Brands;