import Sidebar from "../component/Sidebar"

const Checkin = () => {
  const dummy =[
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
    {
      category: "Luxury",
      room: 101,
    },
  ]

  return (
    <main className="d-flex">
    <Sidebar />
    <section className="table-container sidebar-effect">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((data, i) => (
            <tr key={i} className="border-tb">
              <td align="center"><h3>{i + 1}</h3></td>
              <td align="center"><h3>{data.category}</h3></td>
              <td align="center"><h3>{data.room}</h3></td>
              <td align="center">
                <div className="btn btn-checkin btn-sm mx-sm">Available</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </main>
  )
}

export default Checkin