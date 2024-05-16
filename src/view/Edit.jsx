import Sidebar from "../component/Sidebar";

const Edit = () => {
  return (
    <main className="d-flex">
      <Sidebar />
      <section className="edit sidebar-effect">
        <h1>Edit Product</h1>
        <form >
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" className="form-control" id="image" />
          </div>
          <div className="form-group">
            <label htmlFor="room">Room</label>
            <input type="text" className="form-control" id="room" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Description"
            ></textarea>
            <div className="button-container">
              <button className="btn btn-danger btn-sm mx-sm">
                Cancel
              </button>
              <button className="btn btn-primary btn-sm mx-sm">
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Edit;