import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";
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
      </main>
    </>
  );
}
