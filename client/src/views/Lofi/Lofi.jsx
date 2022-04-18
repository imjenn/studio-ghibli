import { useCallback, useEffect, useState } from 'react';
import imageList from './imageList';
import downArrow from '../../assets/down-arrow-svgrepo-com.svg';
import './Lofi.css';

const Lofi = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const togglePrev = () => {
        (imageIndex === 0) ? setImageIndex(imageList.length - 1) : setImageIndex(imageIndex - 1);
    }

    const toggleNext = () => {
        (imageIndex === imageList.length - 1) ? setImageIndex(0) : setImageIndex(imageIndex + 1);
    }

    const keyHandler = useCallback((e) => {
        if (e.key === "ArrowLeft") {
            togglePrev();
        } else if (e.key === "ArrowRight") {
            toggleNext();
        }
    }, [togglePrev, toggleNext])

    useEffect(() => {
        document.addEventListener("keydown", keyHandler);
        // Clean up
        return () => document.removeEventListener("keydown", keyHandler)
    }, [keyHandler]);

    const togglePlayer = () => {
        const button = document.getElementById("display-button");
        if (button.value === "Hide") {
            document.getElementById("music-player").height = "80";
            button.value = "Display";
        } else if (button.value === "Display") {
            document.getElementById("music-player").height = "99.5%";
            button.value = "Hide";
        }
    }

    return (
        <div className="lofi-container">
            <img
                src={imageList[imageIndex]}
                alt=""
                style={{ width: "100%" }}
                onClick={toggleNext}
            />
            <div className="display-player-controls">
                <input
                    onClick={togglePlayer}
                    id="display-button"
                    value="Hide"
                    type="submit"
                />
                {/* <img 
                    className="expand-arrow" 
                    src={downArrow} 
                    alt="Dropdown arrow"
                    id="display-button"
                /> */}
            </div>
            <iframe
                src="https://open.spotify.com/embed/playlist/2rcMRS9fDOnuu5YUTXAcQZ?utm_source=generator&theme=0"
                width="15%"
                height="99.5%"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                autoPlay="true"
                id="music-player"
                style={{ opacity: "0.6", zIndex: "1" }}
            />
            <div className="lofi-music-controls">
                <p>Click on image or use the left or right arrow keys to change gif</p>
            </div>
        </div>

    )
}

export default Lofi;