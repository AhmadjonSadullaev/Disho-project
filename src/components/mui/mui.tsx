
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const MuiCom = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

     const [value, setValue] = React.useState('1');
    
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
  });
  return (
    <div>
      <Tooltip title="Click to see loading">
      <IconButton onClick={() => setLoading(true)} loading={loading}>
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>


    </div>
  )
}

export default MuiCom;
