

const PhotosFactory = ({ src, content, label, index, onReadMore }) =>
    <div key={index}>
        <img src={src} alt="mask" />
        <p>{content}</p>
        <button onClick={() => onReadMore(index)}>{label}</button>
    </div>

export default PhotosFactory