import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);
  return (
    <div>
      {
        loading ? <Spinner/> :
        posts.length>0 ?
        (<div> {
          posts.map((post)=>(
            <Product key={post.id} post={post}/>
          ))
        }
          </div>):
          <div>
            <p>No post found</p>
            </div>
}
    </div>
  )
};

export default Home;
