import ImageDisplay from "./ImageDisplay";
import "./ImageList.css";

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageDisplay image={image} key={image.id} />;
    });
    return <div className="images-list">{renderedImages}</div>;
}

export default ImageList;
