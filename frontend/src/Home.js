function Home() {
  return (
    <main>
      <h1 className="home">UNITY</h1>
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
          Unity is an app that helps keep people together in tough times. With
          this app you'll be able to post an available space that people can
          book to stay for the night. You can sign up to make an account and
          start posting and rating other places you've stayed at.
        </div>
      </div>

      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
