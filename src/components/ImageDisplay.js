function ImageDisplay({ image }) {
    console.log(image);
    return (
        <div>
            <figure>
                <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    title={image.alt_description}
                />
                <figcaption>
                    <img
                        src={image.user.profile_image.small}
                        alt={image.user.name}
                    />
                    {image.user.name}
                </figcaption>
            </figure>
        </div>
    );
}

export default ImageDisplay;
