import Player from './components/Player'


function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">

          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O"/>
          {/* <li>
            <span classname="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li> */}
          {/* <li>
            <span className="player">
              <span className="player-name">Player2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li> */}
        </ol>
      </div>
    </main>
  )
}

export default App
