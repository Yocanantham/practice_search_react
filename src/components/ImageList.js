import ImageDisplay from "./ImageDisplay";

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageDisplay image={image} key={image.id} />;
    });
    return <div>{renderedImages}</div>;
}

export default ImageList;
