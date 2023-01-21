function Home() {
  return (
    <main>
      <h1>UNITY</h1>
      {/* <div>
        <img
          className="home"
          height="300"
          width="500"
          src={process.env.REACT_APP_SERVER_URL + "images/logo.png"}
          alt="Chia Fruit Shake"
        />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
          <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div> */}
      <div class="wrapper">
        <div class="box box2">
          This box has a background color with an alpha channel
        </div>
      </div>

      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
