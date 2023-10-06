import React, { useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostItem from "./components/PostItem";

function App() {

  const [posts, setPosts] = useState([
  { id: 1, title: 'Javascript', body: 'Description' },
  { id: 2, title: 'Javascript 2', body: 'Description' },
  { id: 3, title: 'Javascript 3', body: 'Description' },
  { id: 4, title: 'Javascript 4', body: 'Description' },
  { id: 5, title: 'Javascript 5', body: 'Description' },
  { id: 6, title: 'Javascript 6', body: 'Description' },
  ])


  return (
    <div className="App">

    <h1 style={{textAlign: 'center'}}>
      Список постов
    </h1>
      {/* <PostItem value={'222'} item={{title:0}} number={21}/> */}
      {/* <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}} />  */}

      {posts.map((post)=>
        <PostItem post={post} key={post.id}/>
      )}


      {/* <PostItem/> */}

    </div>
  );
}

export default App;
