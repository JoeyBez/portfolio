import { useEffect, useState } from 'react';
import categories from './categories.json'
import { useParams } from 'react-router-dom';

function Category() {
    const { category } = useParams();
    const [images, setImages] = useState([]);
    const [folderPath, setFolderPath] = useState("");

    useEffect(() => {
        const getImages = () => {
            setImages(categories[category].images);
            setFolderPath(categories[category].folderPath);
            console.log(categories[category].folderPath);
            console.log(categories[category].images);
        };
        getImages();
    }, [category]);

    return (
        <>
        <div>
            {images.map((img, index) => (
                <img key={index} src={`../src/assets/${folderPath}/${img}`} alt="" className='thumbnail' />
            ))}
        </div>
        </>
    )
}

export default Category
