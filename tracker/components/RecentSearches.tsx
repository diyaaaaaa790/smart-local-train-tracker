export default function RecentSearches() {
  return (
    <section className="recent-section">
      <h2>Recent Searches</h2>

      <div className="recent-list">
        <div className="recent-item">
          <span>Train #12345</span>
          <span className="badge delayed">18 min delay</span>
        </div>
        <div className="recent-item">
          <span>Train #67890</span>
          <span className="badge on-time">On Time</span>
        </div>
        <div className="recent-item">
          <span>Train #11223</span>
          <span className="badge delayed">25 min delay</span>
        </div>
      </div>
    </section>
  );
}
