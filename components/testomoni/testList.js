import * as React from 'react';
 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
 
import Avatar from '@mui/material/Avatar';
 
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
 
 

const TestList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
         
        title="Shrimp and Chorizo Paella"
        subheader="problem of"
      />
      <CardMedia
        component="img"
        height="300"
        image="/assets/banner.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      
        
    </Card>
  );
}

export default TestList