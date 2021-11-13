import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';
import { useEffect,useState } from 'react'
import Loader from "react-loader-spinner";

const Categories = () => {
    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"application/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://server.hunterpartapp.com/api/admin/product/category", requestOptions)
                    .then(res => res.json())
                    .then(res => {if(res.data){
                      setPosts(res.data.categories)
                      setLoading(false);
                    }})

                    
        
    
    }, [])
    return ( <div className="brands" id="cat-page">
  <Head>
    <title> دسته بندی ها - هانتر</title>
        </Head>
        <Header />

    <div className="profile-header">

        <p> دسته بندی ها</p>
    </div>
    <div className="pm">
    <div className="profile-main">
 
    <div className="dash-title">
    <div className="info-btn">
      <Link href="/categories/add"><a >  <button>افزودن دسته بندی جديد </button> </a></Link>
        </div>
        <p>  همه دسته بندی ها</p>
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
            <Link href={"/categories/" + post._id} key={post._id}><a >         <div className="brand2">
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


 
export default Categories;