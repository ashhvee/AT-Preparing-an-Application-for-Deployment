import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

function EditPlaceForm() {
  const history = useHistory();

  const { placeId } = useParams();

  const [place, setPlace] = useState({
    name: "",
    pic: "",
    city: "",
    state: "",
    zipcode: "",
    address: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}places/${placeId}`
      );
      const resData = await response.json();
      setPlace(resData);
    };
    fetchData();
  }, [placeId]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });

    history.push(`/places/${place.placeId}`);
  }

  return (
    <main>
      <h1>Edit Place</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="placename"></label>
          <input
            required
            value={place.placename}
            onChange={(e) => setPlace({ ...place, placename: e.target.value })}
            className="form-control"
            id="placename"
            name="placename"
            placeholder="Place Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address"></label>
          <input
            required
            value={place.address}
            onChange={(e) => setPlace({ ...place, address: e.target.value })}
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pic"></label>
          <input
            value={place.pic}
            onChange={(e) => setPlace({ ...place, pic: e.target.value })}
            className="form-control"
            id="pic"
            name="pic"
            placeholder="Place Picture"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city"></label>
          <input
            value={place.city}
            onChange={(e) => setPlace({ ...place, city: e.target.value })}
            className="form-control"
            id="city"
            name="city"
            placeholder="city"
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="zipcode"></label>
          <input
            value={place.zipcode}
            onChange={(e) => setPlace({ ...place, zipcode: e.target.value })}
            className="form-control"
            id="zipcode"
            name="zipcode"
            required
            placeholder="Zip Code"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Save" />
      </form>
    </main>
  );
}

export default EditPlaceForm;
