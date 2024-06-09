import { createContext, useEffect, useState } from "react";


//Crear y exportar el contexto sin default
export const PhotosContext = createContext();
 
//Crear y exportar el provider con children con default
export default function PhotosProvider({children}){
    //Creamos el estado que usará nuestro contexto
    const [photos, setPhotos] = useState([]);
    //Declaramos nuestra funcion fetch para lamar a la api
    const getPhotos = async () => {
        const response = await fetch("/photos.json");
        const {photos:photosdb} = await response.json();
        setPhotos(photosdb);
    }

    //Agregamos un useEffect para el montaje de la api
    useEffect(() => {
        getPhotos()
    }, [])
    return(
        <PhotosContext.Provider value={{photos, setPhotos}}>
            {children}
        </PhotosContext.Provider>
    )
}