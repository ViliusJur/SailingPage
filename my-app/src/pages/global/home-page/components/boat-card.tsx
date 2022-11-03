import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BoatCard: React.FC<Boat> = ({ title, description, images }) => {
    const CARD_HEIGHT = 480;
    const CARD_IMAGE_HEIGHT = 300;

    return (
      <Card sx={{
        mt: 4,
        minHeight: `${CARD_HEIGHT}px`,
        position: 'relative',

}}
      >
        <CardMedia
          component="img"
          height={CARD_IMAGE_HEIGHT}
          image={images[0]}
          alt={title}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ position: 'absolute', bottom: 0 }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};

export default BoatCard;
