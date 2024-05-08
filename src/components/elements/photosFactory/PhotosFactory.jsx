import maskGlasses from "../../../assets/Photos/Maskold (2).jpg"

const PhotosFactory = ({ src, content, label }) =>
    <div>
        <img src={src} alt="mask" />
        <p>{content}</p>
        <button>{label}</button>
    </div>

export default PhotosFactory