import SeekingNav from "../components/Seeking/SeekingNav";
import ProfileInfo from "../components/Seeking/SeekingTherapistProfileInfo";
import ScrollList from "../components/Seeking/SeekingTherapistScrollList";
import "../css/page/SeekingDashboard.css";

function SeekingDashboard() {
    return (
        <>
            <SeekingNav />
            <section className="dashboard-split-section">
                <ScrollList />
                <ProfileInfo />
            </section>
        </>
    );
}

export default SeekingDashboard;
