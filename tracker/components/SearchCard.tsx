export default function SearchCard() {
  return (
    <section className="search-card">
      <h2>Track Your Train</h2>

      <div className="tabs">
        <button className="tab active">Search by Train Number</button>
        <button className="tab">Search by Route</button>
      </div>

      <input type="text" placeholder="Enter train number (e.g. 12345)" />

      <button className="primary-btn">Track Train</button>

      <div className="route-search">
        <select>
          <option>Select Source Station</option>
        </select>
        <select>
          <option>Select Destination</option>
        </select>

        <button className="secondary-btn">Find Trains</button>
      </div>
    </section>
  );
}
