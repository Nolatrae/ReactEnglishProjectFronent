import { Routes, Route } from 'react-router-dom'
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login, Counter, Quiz, Photos, ListUsers, Converter, CardLexicon, Slider, CardFull } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

import React from "react";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  // const [searchValue, setSearchValue] = React.useState('')
 

  return (
    <>
      <Header />
      {/* <Container
      //  maxWidth="lg"
      > */}
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
          <Route path='/slider' element={<Slider />}></Route>
          
          <Route path='/cardLexicon' element={<CardLexicon />}></Route>
          <Route path={'/cards/:id'} element={<CardFull />}></Route>



        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;
