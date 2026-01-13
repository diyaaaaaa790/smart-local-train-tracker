import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";
import TrainStatusCard from "../components/TrainStatusCard";
import AlternativeCard from "../components/AlternativeCard";
import "../styles/main.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container">
        <section className="hero">
          <h1>Track Your Train in Real-Time</h1>
          <p>
            Get instant delay updates and alternative travel suggestions for
            local trains
          </p>
        </section>

        <SearchCard />

        {/* Live Train Status */}
        <section className="status-section">
          <h2>Live Train Status</h2>

          <div className="status-grid">
            <TrainStatusCard
              name="Chennai Local #12345"
              route="Tambaram → Chennai Beach"
              status="on-time"
              scheduled="10:30 AM"
              expected="10:30 AM"
              station="Guindy"
            />

            <TrainStatusCard
              name="Express Local #67890"
              route="Chennai Central → Velachery"
              status="delayed"
              scheduled="11:15 AM"
              expected="11:33 AM (+18 min)"
              station="Park Town"
            />
          </div>
        </section>

        {/* Alternatives */}
        <section className="alt-section">
          <h2>Alternative Travel Options</h2>

          <div className="alt-grid">
            <AlternativeCard
              title="Next Local Train"
              description="Departs at 10:50 AM"
            />
            <AlternativeCard
              title="Bus Route"
              description="Route 21B available"
            />
            <AlternativeCard
              title="Metro Connection"
              description="Blue Line from Guindy"
            />
          </div>
        </section>
      </main>
    </>
  );
}
