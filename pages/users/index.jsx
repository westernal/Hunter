import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";

const Users = () => {

    const[posts,setPosts] = useState([]);
    let Search = [];
    const[Search2,setSearch2] = useState([]);
    const[loading,setLoading] = useState(true);
   

    useEffect(() => { 
      
        
            var requestOptions = {
                        method: 'GET',
                        headers: {"content-type":"application/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://hunter-server.oben.design/api/admin/user/customer", requestOptions)
                    .then(res => res.json())
                    .then(res => {
                      
                        if (res.data) {
                            
                            setPosts(res.data.users)
                            setSearch2(res.data.users);
                            setLoading(false);
                        }
                    })

                   
    
    }, [])

    function search() {
       Search = [];
        let input = document.getElementById("searchBox").value.toUpperCase();
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].firstName && posts[i].lastName) {
                
         
            if (posts[i].firstName.toUpperCase().indexOf(input) > -1 || posts[i].lastName.toUpperCase().indexOf(input) > -1) {
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
    return ( <div className="users">
        <Head>
    <title> کاربران - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> کاربران</p>
    </div>
   <div className="pm">
   <div className="profile-main">
   <div className="dash-title" id="res">
   <div className="info-btn">
   <Link href="/users/add"><a>  <button>افزودن كاربر جديد</button></a></Link>   
        </div>
        <p>همه کاربران</p>
      
    </div>
    <div className="search">
        <div className="search-form">
        <input type="text" placeholder="جستجوی کاربران" onChange={search} id="searchBox"/>
        <img src="/Images/search.svg" alt="search icon" />
        </div>
    </div>
    <div className="info-btn" id="hid">
        <Link href="/users/add"><a>  <button>افزودن كاربر جديد</button></a></Link>   
        </div>
    <div className="dash-title" id="hid">
        <p>همه کاربران</p>
       
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
    <div className="dash-result">
                            <div className="dr-nav">
                                <p>ردیف</p>
                                <p>نام و نام خانوادگی</p>
                                <p>شماره همراه</p>
                                <p > نوع فعالیت</p>
                                <p>نام فروشگاه</p>
                                <p>جزئيات</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                          
                            {
          Search2.map((post,index) => {
          return(
            <div className="dr-row" id="hidden" key={post._id}>
            <p id="drn">{index+1}</p>
            <p id="dr-date">{post.firstName + " " + post.lastName}</p>
            <p className="dr-spec">{post.mobileNumber}</p>
            <p className="dr-spec2">{post.activity}</p>
            <p>{post.storeName}</p>
           <Link href="/users/[id]" as={`/users/${post._id}`} ><a> <p>مشاهده جزئيات</p> </a></Link>
        </div>
          )
           })
       }
                           
                            </div>
                        </div>
}
       
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default Users;