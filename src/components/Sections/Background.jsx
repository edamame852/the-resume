// Thank you Sling Academy!
import backgroundImage from "../../assets/header-background.webp";

export default function Background() {
    return (
        <div
            style={{
                // use the src property of the image object
                backgroundImage: `url(${backgroundImage.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1 style={{ fontSize: 50, color: 'white' }}>Yoooo!</h1>
        </div>
    );
}