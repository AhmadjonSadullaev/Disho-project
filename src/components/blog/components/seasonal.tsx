import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Greendv } from '../blogstyle.ts';


function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Seasonal = () => {
  return (
<div>
         <ImageList
      sx={{ width: 720, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

      <h3>Seasonal</h3>
              <Greendv></Greendv>
              <p>By:John Doe| Sept. 03, 2021</p>
              <h2>Most Common Grocery Items for Your Hosehold</h2>
            <p>
            Accumsan tortor posuere ac ut consequat semper viverra nam. Posuere sollicitudin aliquam ultrices sagittis orci a. Nibh cras pulvinar mattis nunc. Nunc non blandit massa enim nec dui nunc. Enim sit amet venenatis. Nunc sed velit dignissim sodales ut eu sem integer. Rutrum quisque non tellus orci ac auctor augue mauris. Faucibus turpis in eu mi bibendum neque egestas
            </p>

</div>
   
  )
};

export default Seasonal;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    
  
  ];
