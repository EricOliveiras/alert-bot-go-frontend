import { discordAuthURL } from '../../config/vars'

import './style.css'

const Main = () => {
  const handleDiscordLogin = async () => {
    window.location.href = discordAuthURL
  };

  return (
    <div className="main-page-container">
      <div className="main-page-content">
        <h1>Adicione nosso bot e tenha alertas de suas lives favoritas</h1>
        <button onClick={handleDiscordLogin}>Logar com Discord</button>
      </div>
    </div>
  )
}

export default Main