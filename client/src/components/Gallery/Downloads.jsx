import { saveAs } from 'file-saver';
import GALLERY_IMAGES from './sa-images.json';
import './Downloads.css';

const Downloads = () => {
    const downloadImage = (e) => {
        console.log(e.target.src)
        saveAs(e.target.src, "chihiro.jpg");
    }
    //To Do: Implement API

    return (
        <div className="gallery">
            {
                GALLERY_IMAGES.map((image) => {
                    return (
                        <div className="gallery-image">
                            <img src={image} alt="" onClick={downloadImage} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Downloads;