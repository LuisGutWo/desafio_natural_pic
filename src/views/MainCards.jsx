import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { Card } from "react-bootstrap";
import { useFavoritesContext } from "../context/FavoritesContext";

const MainCards = ({ info, selectFavorites }) => {
  const { addFavorites, removeFavorites } = useFavoritesContext();

  return (
    <Card style={{ width: "14rem", border: 0 }}>
      <Card.Img variant="cover" src={info.src?.portrait} alt="Card image" />
      <Card.ImgOverlay className="card-content">
        <Card.Text className="card-title fs-7 text-white">{info.alt}</Card.Text>
        {selectFavorites ? (
          <Button
            size="small"
            onClick={() => {
              removeFavorites(info.id);
            }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete Likes
          </Button>
        ) : (
          <Button
            onClick={() => {
              addFavorites(info);
            }}
            size="small"
            variant="contained"
            color="primary"
            sx={{ padding: 0.5 }}
            endIcon={<SendIcon />}
          >
            Agregar a Favoritos
          </Button>
        )}
      </Card.ImgOverlay>
    </Card>
  );
};

export default MainCards;
