function Home() {
  return (
    <main>
      <h1>UNITY</h1>
      <div >
        <img className="home" src={process.env.REACT_APP_SERVER_URL + 'images/hotelBackground.jpg'} alt="background" />
        <div class="wrapper">
    <div class="box box2">This box has a background color with an alpha channel</div>
</div>
      </div>
      <a href="/places">
      </a>
    </main>
  );
}

export default Home;