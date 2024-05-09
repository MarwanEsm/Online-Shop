import styles from "./PhotosFactory.module.scss"

const PhotosFactory = ({ src, content, label, index, onReadMore, expanded }) => {
    const handleClick = () => {
        onReadMore(index);
    };

    return (
        <div className={styles.photoContainer}>
            <img src={src} alt={`photo_${index}`} />
            <div className={styles.content} style={{ height: expanded ? "250px" : "100px" }}>
                <p>{content}</p>
            </div>
            <button onClick={handleClick}>{label}</button>
        </div>
    );
};

export default PhotosFactory;
