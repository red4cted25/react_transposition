import { Link } from 'react-router'
function Home() {
  return (
    <>
      {/* Title */}
      <div className='game-title'>
        <h1>The Code Vein</h1>
        <p>Transposition Cipher Game by red4cted25</p>
      </div>
      {/* Buttons */}
      <main>
        <Link to={"/game/easy"}><button className="btn">Easy</button></Link>
        <Link to={"/game/medium"}><button className="btn">Medium</button></Link>
        <Link to={"/game/hard"}><button className="btn">Hard</button></Link>
        <Link to={"/game/impossible"}><button className="btn">Impossible</button></Link>

        <Link to={"/rules"}><button className="btn rules">Rules</button></Link>
      </main>
    </>
  );
}

export default Home;
