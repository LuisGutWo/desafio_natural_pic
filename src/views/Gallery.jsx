import { useEffect, useState } from "react";
import MainCards from "./MainCards";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImg = async () => {
    const res = await fetch("fotos.json");
    const data = await res.json();
    setImages(data.photos);
  };
  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="d-flex flex-wrap container-card gap-3">
      {images.map((image) => {
        return <MainCards key={image.id} info={image} />;
      })}
    </div>
  );
};

export default Gallery;
