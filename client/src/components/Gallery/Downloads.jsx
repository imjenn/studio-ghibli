import { saveAs } from 'file-saver';
import './Downloads.css';

const Downloads = () => {
    const downloadImage = (e) => {
        console.log(e.target.src)
        saveAs(e.target.src, "chihiro.jpg");
    }
    //To Do: Implement API
    
    return (
        <div className="gallery">
            <div className="gallery-image">
                <img onClick={downloadImage} src="https://www.ghibli.jp/gallery/chihiro001.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img onClick={downloadImage} src="https://www.ghibli.jp/gallery/chihiro002.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img onClick={downloadImage} src="https://www.ghibli.jp/gallery/chihiro003.jpg" alt="" />
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
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro007.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro008.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro009.jpg" alt="" />
            </div>
            <div className="gallery-image">
                <img src="https://www.ghibli.jp/gallery/chihiro010.jpg" alt="" />
            </div>
        </div>
    )
}

export default Downloads;