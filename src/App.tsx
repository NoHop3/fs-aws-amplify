import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from "./graphql/queries";

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const blogData = await API.graphql(graphqlOperation(listBlogs)) as any
      const blogs = blogData.data.listBlogs.items
      setBlogs(blogs)
    } catch (error) {
      console.error(error)
    }
  } 

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='App'>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
