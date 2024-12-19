import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import levels from './levels.json'
import { GoHome } from "react-icons/go";

function Transposition() {
  const { level } = useParams();
  const [currentLevelData, setCurrentLevelData] = useState([]);
  const [num, setNum] = useState(3);
  const [gameWord, setGameWord] = useState(null);
  const [iteration, setIteration] = useState(1);
  const [hint, setHint] = useState(3);

  useEffect(() => {
    // Determine the current level's data and number of inputs
    let selectedLevelData = [];
    let inputNum;
    
    switch(level) {
      case 'easy':
        selectedLevelData = levels.easy;
        inputNum = 2;
        break;
      case 'medium':
        selectedLevelData = levels.medium || [];
        inputNum = 3;
        break;
      case 'hard':
        selectedLevelData = levels.hard || [];
        inputNum = 4;
        break;
      case 'impossible':
        selectedLevelData = levels.impossible || [];
        inputNum = 5;
        break;
      default:
        selectedLevelData = levels.easy;
        inputNum = 2;
    }

    setCurrentLevelData(selectedLevelData);
    setNum(inputNum);
  }, [level]);

  useEffect(() => {
    if (currentLevelData.length > 0) {
      const randomWord = currentLevelData[Math.floor(Math.random() * currentLevelData.length)];
      setGameWord(randomWord);
    }
  }, [currentLevelData]);

  const handleInput = (e) => {
    const text = e.target.value;
    if(/^[a-zA-Z]*$/.test(text)) {
      return text.toUpperCase()
    } else {
      alert("Input must be a letter")
      e.target.value = text.slice(0, -1)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setIteration((prev) => prev + 1);
    setGameWord(null);
    document.getElementById('guess').value = '';
  }

  const handleHint = () => {
    // No current functionality
    // Add functionality for hinting at the right word
    // Maybw putting in a letter or two?
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const guess = document.getElementById('guess').value.toLowerCase();
    if (guess === gameWord.word.toLowerCase()) {
      setGameWord(null);
      return (
        <dialog id='correct'>
          <form method='dialog'>
            <h2>Congratulations!</h2>
            <p>Your guess is correct!</p>
            {iteration < 3 ? <button onClick={handleReset}>Play Again</button> : <Link to={'/finish'}><button className='btn'>Finish</button></Link>}
          </form>
        </dialog>
      )
    } else {
      alert("Incorrect!");
    }
  }

  if (!gameWord) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="back">
        <h1><Link to={'/'}><GoHome /></Link></h1>
      </div>
      <h1 className="title">{level.toUpperCase()}</h1>
      {/* Timer */}
      <div>
        {/* Progress Bar */}
      </div>
      {/* Cipher Display */}
      <div className='cipher-box'>
        <div className='cipher-numbers'>
        {Array.from({ length: num }, (_, i) => i + 1).map((i) => (
              <p key={i} >{i}</p>
            ))}
        </div>
        <div className={`cipher-inputs ${level}`}>
          {Array.from({ length: num*num }, (_, i) => i + 1).map((i) => (
              <input key={i} type="text" maxLength={1} onChange={handleInput} />
            ))}
        </div>
      </div>
      {/* Cipher Info */}
      <div className="info">
        <p>Ciphertext: {gameWord.ciphertext}</p>
        <p>Key: {gameWord.key}</p>
      </div>
      {/* Check Button */}
      <div>
        <form>
          <div className="input-container">
            <input type="text" name="guess" id="guess" placeholder='Input your guess...'/>
            <div className="underline"></div>
          </div>
          
          <button type="submit" onClick={handleSubmit} id='check-btn'>Check</button>
          <button onClick={handleHint} id='hint-btn'>Hint</button>
        </form>
      </div>
    </>
  );
}

export default Transposition;
