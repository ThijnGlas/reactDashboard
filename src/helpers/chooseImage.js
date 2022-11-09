import flowersImage from "../img/flowers.jpg";
import watchImage from "../img/watch.jpg";
import skyImage from "../img/sky.jpg"
import mountainImage from "../img/mountain.jpg"

function chooseImage(inputFromPopup) {
    let toBeAddedImage;
    switch (inputFromPopup) {
        case ("watch"):
            toBeAddedImage = watchImage;
            break;
        case ("flowers"):
            toBeAddedImage = flowersImage;
            break;
        case ("sky"):
            toBeAddedImage = skyImage;
            break;
        case ("mountain"):
            toBeAddedImage = mountainImage;
            break;
        default:
            toBeAddedImage = mountainImage
            break;
    }
    return toBeAddedImage;
}

export default chooseImage;
