import SeekingNav from "../components/Seeking/SeekingNav";
import SeekingMessageScroll from "../components/Seeking/SeekingMessageScroll";
import SeekingMessageSection from "../components/Seeking/SeekingMessageSection";
import "../css/page/SeekingDashboard.css";

function SeekingMessagePage() {
    return (
        <>
            <SeekingNav />
            <section className="dashboard-split-section">
                <SeekingMessageScroll />
                <SeekingMessageSection />
            </section>
        </>
    );
}

export default SeekingMessagePage;
