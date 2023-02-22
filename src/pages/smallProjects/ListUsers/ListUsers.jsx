import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
// Тут список пользователей: https://reqres.in/api/users

export const ListUsers = () => {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [success, setSucess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении пользователей');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onCLickInvite = (id) => {
    if (invites.included(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSucess(true)
  }

  return (
    <div className="okno">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onCLickInvite={onCLickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};
