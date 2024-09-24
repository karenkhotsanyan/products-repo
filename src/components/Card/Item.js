import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Item({ product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px", display: "inline-block" }}>
      <CardMedia
        sx={{ width: "100%", height: 200, objectFit: "contain" }}
        image={product.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginBottom: "10px" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body1">
          {"Price: " + product.price + " $"}
        </Typography>
        <Typography>{"Category: " + product.category}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
