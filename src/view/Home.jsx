import Sidebar from "../component/Sidebar";

const Home = () => {
  return (
    <main className="d-flex">
      <Sidebar />
      <section className="home-section pt-xl sidebar-effect">
        <div className="information">
          <div className="icon">
            <img src="/Account.png" alt="icon image" />
            <h2>Booking</h2>
          </div>
          <span>4</span>
        </div>

        <div className="information">
          <div className="icon">
            <img src="/DoubleBed.png" alt="icon image" />
            <h2>Booking</h2>
          </div>
          <span>4</span>
        </div>
      </section>
    </main>
  );
};

export default Home;