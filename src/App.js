import React, { useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
   setPosts([...posts, newPost])
   setTitle('')
   setBody('')
  }

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" placeholder="Название поста" />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      < PostList posts={posts} title="Посты про JS" />


    </div>
  );
}

export default App;
