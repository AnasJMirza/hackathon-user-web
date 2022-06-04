import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import M1 from '../../assets/images/M1.jpg'



export default function ItemCard(props) {




  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={M1}
        alt={props.title}
      />
      <CardContent sx={{ height: 145 }}>
        <Typography  gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" > ${props.price} </Button>
        <div className='order-now'>
            <Button size="large">Order Now</Button>
        </div>
      </CardActions>
    </Card>
  );
}
