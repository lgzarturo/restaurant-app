import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { TurnModel } from '../models/restaurantDetailModel'

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    padding: '.75em'
  },
});

interface Props {
  title: string
  description: string
  subDescription: string
  image: string
  turns: TurnModel[]
}

export const DetailCard = ({title, description, subDescription, image, turns}: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={description}
          height="250"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {subDescription}
          </Typography>
          <ul>
            {turns.map((turn, index) => (
              <li key={index}>
                {turn.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
