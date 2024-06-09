import { PhotosContext } from "../assets/contexts/FotosContext";
import { useContext } from "react";

const Favorites = () => {

  const {photos, setPhotos} = useContext(PhotosContext)
  //Filtrar los datos para mostrar solo los que tienen liked = true
  const photosFiltradas = photos.filter((e) => e.liked == true)
  console.log(photosFiltradas)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photosFiltradas.map((e, index) => <div key={index} className="photo" style={{backgroundImage: `url(${e.src.tiny})`}}></div>)}
      </div>
    </div>
  );
};
export default Favorites;
