import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../features/users/userSlice';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// import { useGetUsersQuery, useGetFavoritesQuery, useRemoveFavoriteMutation } from '../features/users/userApi';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box'; // For centering

const Favorites = () => {
  
  //چون سرویس علاقه مندی ها برای حذف و اضافه خطا میداد
  // و یا من نمیدونستم چی باید بفرستم این قسمت کامنت شدو فرانتی مدیریت شد

  // const { data: users, isLoading, isError } = useGetUsersQuery();
  // const { data: favorites, isLoading: isFavoritesLoading, isError: isFavoritesError } = useGetFavoritesQuery();
  // const [removeFavorite] = useRemoveFavoriteMutation();

  // if (isLoading || isFavoritesLoading) return <Box sx={{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh'
  // }}>
  //   <CircularProgress />
  // </Box>;
  // if (isError || isFavoritesError) return <div>Error...</div>;


  const favorites = useSelector((state) => state.users.favorites);
  const dispatch = useDispatch();

  const handleRemoveUser = (favorite) => {
    dispatch(removeFromFavorites(favorite));
    // await removeFavorite(favorite.id);
  };


  return (
    <>
      <h2>Favorites List</h2>
      <List>
        {favorites.map((user) => (
          <ListItem key={user.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveUser(user)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
        {/* 
        {favorites?.map((favorite) => {
          const user = users?.find((user) => user.id === favorite.id);
          if (!user) return null;
          return (
            <ListItem key={favorite.id} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(favorite)}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemText primary={user.name} />
            </ListItem>
          );
        })} */}
      </List>
    </>
  );
};

export default Favorites;