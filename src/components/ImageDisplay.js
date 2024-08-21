import "./ImageDisplay.css";

function ImageDisplay({ image }) {
    console.log(image);
    return (
        <div className="image-card">
            <figure className="image-flex">
                <img
                    className="image-search"
                    src={image.urls.small}
                    alt={image.alt_description}
                    title={image.alt_description}
                />
                <figcaption className="image-caption">
                    <div className="image-profile-wrapper">
                        <img
                            className="image-profile"
                            src={image.user.profile_image.small}
                            alt={image.user.name}
                        />
                        <div className="image-profile-display">
                            <img
                                style={{ borderRadius: "15px" }}
                                src={image.user.profile_image.large}
                                alt={image.user.name}
                            />
                        </div>
                    </div>

                    <div>
                        <h4 className="name">{image.user.name}</h4>
                        <a
                            className="username"
                            href={image.user.links.html}
                            target="_blank"
                            rel="noreferrer">
                            @{image.user.username}
                        </a>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default ImageDisplay;
