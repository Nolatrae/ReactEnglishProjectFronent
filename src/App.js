import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login, Counter, Quiz, Photos, ListUsers, Converter } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

import React from "react";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
 

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts/:id' element={<FullPost />}></Route>
          <Route path='/posts/:id/edit' element={<AddPost />}></Route>
          <Route path='/add-post' element={<AddPost />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Registration />}></Route>

          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/photos' element={<Photos />}></Route>
          <Route path='/listusers' element={<ListUsers />}></Route>
          <Route path='/converter' element={<Converter />}></Route>



        </Routes>
      </Container>
    </>
  );
}

export default App;
