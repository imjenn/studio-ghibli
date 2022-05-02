import { saveAs } from 'file-saver';
import './Downloads.css';

const Downloads = () => {
    const downloadImage = () => {
        saveAs("https://www.ghibli.jp/gallery/chihiro001.jpg", "chihiro.jpg");
    }
    return (
        <div className="gallery">
            <div className="gallery-image">
                <img onClick={downloadImage} src="https://www.ghibli.jp/gallery/chihiro001.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro002.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro003.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro004.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro005.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro006.jpg" alt="" />
            </div>
        </div>
    )
}

export default Downloads;