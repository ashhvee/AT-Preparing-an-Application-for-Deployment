
function Home() {
  return (
    <main>
      <h1>UNITY</h1>
      <div >
        <img className="home" height="300" width="500" src={process.env.REACT_APP_SERVER_URL + 'images/chia-fruit-drink.jpg'} alt="Chia Fruit Shake" />
        <div className="home">
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
