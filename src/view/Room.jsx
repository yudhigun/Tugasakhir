import Sidebar from "../component/Sidebar";

const Room = () => {
  const dummy = [
    {
      img: "https://www.savills.co.uk/_images/adobestock-539646437.jpg",
      name: "Luxury Room",
    },
    {
      img: "https://www.savills.co.uk/_images/adobestock-539646437.jpg",
      name: "Luxury Room",
    },
    {
      img: "https://www.savills.co.uk/_images/adobestock-539646437.jpg",
      name: "Luxury Room",
    },
  ];
  const navigateEdit = () => {
    window.location.href = "/edit"
  }
  return (
    <main className="d-flex">
      <Sidebar />
      <section className="table-container sidebar-effect">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Room</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((data, i) => (
              <tr key={i} className="border-tb">
                <td align="center"><h3>{i + 1}</h3></td>
                <td align="center">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="img-thumbnail"
                  />
                </td>
                <td align="center"><h3>{data.name}</h3></td>
                <td align="center">
                  <button onClick={navigateEdit} className="btn btn-primary btn-sm mx-sm">Update</button>
                  <button className="btn btn-danger btn-sm mx-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Room;