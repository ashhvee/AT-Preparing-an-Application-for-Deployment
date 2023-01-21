import { useState } from "react";
import { useHistory } from "react-router";

function NewPlaceForm() {
  const history = useHistory();

  const [place, setPlace] = useState({
    name: "",
    pic: "",
    city: "",
    state: "",
    cuisines: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_SERVER_URL}places`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });

    history.push("/places");
  }

  return (
    <main>
      <h1>Add a New Place</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="name"></label>
            <input
              required
              value={place.name}
              onChange={(e) => setPlace({ ...place, name: e.target.value })}
              className="form-control"
              id="name"
              name="name"
              placeholder="Place Name"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="founded"></label>
            <input
              required
              value={place.founded}
              onChange={(e) => setPlace({ ...place, founded: e.target.value })}
              className="form-control"
              id="founded"
              name="founded"
              placeholder="Address"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="pic"></label>
            <input
              value={place.pic}
              onChange={(e) => setPlace({ ...place, pic: e.target.value })}
              className="form-control"
              id="pic"
              name="pic"
              placeholder="Picture"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="city"></label>
            <input
              value={place.city}
              onChange={(e) => setPlace({ ...place, city: e.target.value })}
              className="form-control"
              id="city"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="state"></label>
            <input
              value={place.state}
              onChange={(e) => setPlace({ ...place, state: e.target.value })}
              className="form-control"
              id="state"
              name="state"
              placeholder="State"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cuisines"></label>
            <input
              value={place.cuisines}
              onChange={(e) => setPlace({ ...place, cuisines: e.target.value })}
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
              placeholder="Zip Code"
            />
          </div>
        </div>
        <input className="btn btn-dark" type="submit" value="Add Place" />
      </form>
    </main>
  );
}

export default NewPlaceForm;
