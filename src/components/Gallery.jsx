import { PhotosContext } from "../assets/contexts/FotosContext";
import { useContext } from "react";
import IconHeart from "./IconHeart"

const Gallery = () => {
  const {photos, setPhotos} = useContext(PhotosContext)

  //Funcion para que al dar click cambie el estado del boolean
  function liked(index){
    photos[index].liked = true;
}

  return <div className="gallery grid-columns-5 p-3">
    {photos.map((element, index) => <div key={index} onClick={() => liked(index)} className="photo" style={{backgroundImage: `url(${element.src.tiny})`}}>
      <IconHeart filled={element.liked}/>
    </div>)}

  </div>;
};
export default Gallery;
