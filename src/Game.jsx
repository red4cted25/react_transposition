import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import levels from './levels.json'

function Transposition() {
  const { level } = useParams();
  const [currentLevelData, setCurrentLevelData] = useState([]);
  const [num, setNum] = useState(3);
  const [gameWord, setGameWord] = useState(null);
  const [iteration, setIteration] = useState(1);

  useEffect(() => {
    // Determine the current level's data and number of inputs
    let selectedLevelData = [];
    let inputNum = 3;
    
    switch(level) {
      case 'easy':
        selectedLevelData = levels.easy;
        inputNum = 3;
        break;
      case 'medium':
        selectedLevelData = levels.medium || [];
        inputNum = 4;
        break;
      case 'hard':
        selectedLevelData = levels.hard || [];
        inputNum = 5;
        break;
      case 'impossible':
        selectedLevelData = levels.impossible || [];
        inputNum = 6;
        break;
      default:
        selectedLevelData = levels.easy;
        inputNum = 3;
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
            {iteration < 3 ? <button onClick={handleReset}>Play Again</button> : <Link to='/finish'><button className='btn'>Finish</button></Link>}
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
    <div>
      <h1 className="title">{level}</h1>
      {/* Timer */}
      <div>
        {/* Progress Bar */}
      </div>
      {/* Cipher Display */}
      <div>
        <div className='cipher-numbers'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
        <div className="cipher-inputs">
          {Array.from({ length: num*num }, (_, i) => i + 1).map((i) => (
              <input key={i} type="text" maxLength={1} onChange={handleInput} />
            ))}
        </div>
      </div>
      {/* Cipher Info */}
      <div className="info">
        <p>Word: {gameWord.word}</p>
        <p>Ciphertext: {gameWord.ciphertext}</p>
        <p>Key: {gameWord.key}</p>
      </div>
      {/* Check Button */}
      <div>
        <form>
          <input type="text" name="guess" id="guess" placeholder='Input your guess...'/>
          <button type="submit" onClick={handleSubmit}>Check</button>
        </form>
      </div>
    </div>
  );
}

export default Transposition;
