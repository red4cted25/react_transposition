import { useParams } from 'react-router-dom';

function Transposition() {
  const { level } = useParams();

  const createGame = (level) => {
    return (
      <>
        <h1 className="title">{level}</h1>
        {/* Timer */}
        <div>
          
        </div>
      </>
    )
  }
  return (
    <div>
      
    </div>
  );
}

export default Transposition;
