import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import './reset.scss';
import './style.scss';
import { UniqueCard } from '../../components/CardLexicon/UniqueCard';


export const CardFull = () => {
  const [info, setInfo] = React.useState()
  const { id } = useParams()
  console.log(id)

  React.useEffect(() => {
    async function fetchData(){
      try{
      const {data} = await axios.get('https://63f1e63eaab7d09125fd96ac.mockapi.io/photos/' + id)
      setInfo(data)
      }catch(error){
        alert('Ошибка при получении данных')
      }
    }

    fetchData()
  }, [])

  if (!info) {
    return <>'Загрузка...'</>
  }

  console.log(info)


  return (
    <section className='cardslexicon'>
      <section className="cardFull">
        <div className="container">
          <div className="container-card">
            {/* {info.map((obj) => (
              <UniqueCard 
              {...obj}
              />
            ))} */}
            {id}
          </div>
        </div>
      </section>


    </section>
  );
};
