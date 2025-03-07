import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  InputAdornment,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'; // For centering
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/users/userSlice';
import {
  useGetUsersQuery,
  // useGetFavoritesQuery,
  // useAddFavoriteMutation,
  // useRemoveFavoriteMutation
} from '../features/users/userApi';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

const UserList = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  // const { data: favorites, isLoading: isFavoritesLoading, isError: isFavoritesError } = useGetFavoritesQuery();


  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.users.favorites);

  //چون سرویس  علاقه مندی ها خطا داشت  یا من نمیدونستم چطور باید اطلاعات رو بفرستم این قسمت کامنت شد
  // const [addFavorite] = useAddFavoriteMutation();
  // const [removeFavorite] = useRemoveFavoriteMutation();
  const [searchUser, setSearchUsers] = useState('');

  const handleFavoriteData = async (user) => {
    if (favorites.find((fav) => fav.id === user.id)) {
      dispatch(removeFromFavorites(user));
    } else {
      dispatch(addToFavorites(user));
    }

    // const favorite = favorites?.find((fav) => fav.id === user.id);
    // if (favorite) {
    //   await removeFavorite(favorite.id);
    // } else {
    //   await addFavorite({ userId: user.id });
    // }
  };

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  if (isLoading) return <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <CircularProgress />
  </Box>

  if (isError) return <div>متأسفم خطایی رخ داده است</div>;

  return (
    <div>
      <TextField
        label="search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchUser}
        onChange={(e) => setSearchUsers(e.target.value)}
        slotProps={{
          input: {
            endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          },
        }}
      />
      <List>
        {filteredUsers?.map((user) => (
          <ListItem key={user.id} secondaryAction={
            <IconButton edge="end" onClick={() => handleFavoriteData(user)}>
              {favorites?.find((favorit) => favorit.id === user.id) ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon />}
            </IconButton>
          }>
            <Avatar sx={{ marginRight: "10px" }} src={user.avatar} > <PersonIcon /></Avatar>
            <ListItemText
              primary={user.name}
              sx={{ borderBottom: "1px solid #eee" }}
              secondary={
                <Typography
                  color="gray"
                >
                  {user.createdAt}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;