import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

// import styles from './Header.module.scss';
import styles from './headerStyles.scss'
import reset from './reset.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';




export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch()
  const onClickLogout = () =>{
    if (window.confirm('Are you sure you want to log')){
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }

  const [mobileMenu, setMobileMenu] = React.useState(false)
  

  // return (
  //   <div className={styles.root}>
  //     {/* <Container maxWidth="lg"> */}
  //       <div className={styles.inner}>
  //         <Link className={styles.logo} to="/">
  //           <div>Главная</div>
  //         </Link>

  //         <Link className={styles.logo} to="/counter">
  //           <div>счётчик</div>
  //         </Link>
  //         <Link className={styles.logo} to="/quiz">
  //           <div>Квиз</div>
  //         </Link>
  //         <Link className={styles.logo} to="/photos">
  //           <div>Фото</div>
  //         </Link>
  //         <Link className={styles.logo} to="/listusers">
  //           <div>листюзер</div>
  //         </Link>
  //         <Link className={styles.logo} to="/converter">
  //           <div>Конвертер</div>
  //         </Link>

  //         <Link className={styles.logo} to="/cardLexicon">
  //           <div>Карточки</div>
  //         </Link>

          
  //         <div className={styles.buttons}>
  //           {isAuth ? (
  //             <>
  //               <Link to="/add-post">
  //                 <Button variant="contained">Написать статью</Button>
  //               </Link>
  //               <Button onClick={onClickLogout} variant="contained" color="error">
  //                 Выйти
  //               </Button>
  //             </>
  //           ) : (
  //             <>
  //               <Link to="/login">
  //                 <Button variant="outlined">Войти</Button>
  //               </Link>
  //               <Link to="/register">
  //                 <Button variant="contained">Создать аккаунт</Button>
  //               </Link>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     {/* </Container> */}
  //   </div>
  // );

  return(
    <header className="header">
    <div className="container">
      <nav className="nav">
        <div className="menu__btn" onClick={() => setMobileMenu(!mobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="#" className="menu__logo">
          {/* <img src='cards.jpg' alt="" className="menu__logo" /> */}
          EASYLEARN
        </Link>
        <ul className={`menu ${mobileMenu ? 'menu--active' : ""}`}>
          <li className="menu__list"><Link to="/" className="menu__link">Главная</Link></li>
          <li className="menu__list"><Link to="#" className="menu__link">Правила</Link></li>
          <li className="menu__list"><Link to="/cardlexicon       " className="menu__link">Карточки</Link></li>
          <li className="menu__list"><Link to="#" className="menu__link">Профиль</Link></li>
        </ul>
        <div className="login">
          <span>Sign it</span>
        </div>
      </nav>
    </div>
    </header>
  )

};
