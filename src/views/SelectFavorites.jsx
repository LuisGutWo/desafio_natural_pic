import { useFavoritesContext } from "../context/FavoritesContext";
import MainCards from "./MainCards";

export default function SelectFavorites() {
  const { favorites } = useFavoritesContext();

  return (
    <div className="container">
      <h1 className="text-black my-3 fs-2">Fotos favoritas</h1>
      <div className="d-flex flex-wrap container-card gap-3 mb-4">
        {favorites.map((item) => (
          <MainCards key={item.src} info={item} selectFavorites />
        ))}
      </div>
    </div>
  );
}
