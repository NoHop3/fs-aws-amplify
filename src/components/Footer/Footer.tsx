import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from "@mui/icons-material/Bedtime";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<HomeIcon />}
      />
      {/* <BottomNavigationAction
        label='Recents'
        value='recents'
        icon={<RestoreIcon />}
      /> */}
      <BottomNavigationAction
        label='Favorites'
        value='favorites'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label='Theme'
        value='theme'
        icon={<BedtimeIcon />}
      />
    </BottomNavigation>
  );
}