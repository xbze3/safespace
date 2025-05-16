import SeekingNav from "../components/Seeking/SeekingNav";
import PeerProfileInfo from "../components/Seeking/SeekingPeerProfileInfo";
import PeerScrollList from "../components/Seeking/SeekingPeerScrollList";
import "../css/page/SeekingDashboard.css";

function SeekingPeerPage() {
    return (
        <>
            <SeekingNav />
            <section className="dashboard-split-section">
                <PeerScrollList />
                <PeerProfileInfo />
            </section>
        </>
    );
}

export default SeekingPeerPage;
