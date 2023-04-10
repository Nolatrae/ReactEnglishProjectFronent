import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import './reset.scss';
import './styles.scss';
import promoCards from '../../static/img/cards.png';
// import itemsCard from '../../static/cardLexicon.json';
import { useSelector, useDispatch } from 'react-redux';
import { UniqueCard } from '../../components/CardLexicon/UniqueCard';
import { UniqueCardLoader } from '../../components/CardLexicon/UniqueCardLoader';

import Search from '../../components/search/Search';
import { Skeleton } from '@mui/material';

export const CardLexicon = ({ }) => {
  const navigate = useNavigate()
  const searchValue = useSelector((state) => state.search.value);
  const search = searchValue ? `search=${searchValue}` : '';

  // console.log(UniqueCardLoader)

  const [collections, setCollections] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    fetch(`https://63f1e63eaab7d09125fd96ac.mockapi.io/photos?

    `)
      // ${search}
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении карт');
      })
    .finally(() => setIsLoading(false))
  }, [searchValue]);

  // console.log(collections)

  const skeletons = [...new Array(10)].map((_,index) => <UniqueCardLoader key={index}/>)
  const cards = collections
  .filter((obj) => {
    if (obj.title.includes(searchValue)) {
      return true;
    }
    return false;
  })
  .map((obj, index) => (
    <Link key={index} to={`/cards/${index}`}>
      <UniqueCard
        {...obj}
      />
    </Link>
  ))

  return (
    <section className='cardslexicon'>
      <section className="promo">
        <div className="container">
          <div className="promo__cards">
            <div className="promo__titles">
              <h1 className="promo__titles-main">Cards</h1>
              <p className="promo__titles-desc">Cards with words will be displayed here.</p>
            </div>
            <div className="promo__img">
              <img src={promoCards} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section__cards">
        <div className="container">
          <Search></Search>
          <div className="container-card">
            {isLoading ? skeletons : cards}
          </div>
        </div>
      </section>
    </section>
  );
};
