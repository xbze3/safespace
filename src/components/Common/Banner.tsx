import "../../css/Banner.css";

interface props {
    banner_text: string | null;
}

function Banner({ banner_text }: props) {
    return (
        <div className="banner-text-div">
            <h2>{banner_text}</h2>
        </div>
    );
}

export default Banner;
