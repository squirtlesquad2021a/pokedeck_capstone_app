import React from 'react';

function ButtonSound() {
  let audio = new Audio('https://cdn.sndup.net/4hmy/PokemonButtonClick.mp3?token=iNvpdxVOpCaJdjOEbPWnyR1SWmtgl8mvKWx8Dy_HBtw&token_path=%2F4hmy%2F&expires=1619134557')

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}></button>
    </div >
  );
}
// https://cdn.sndup.net/4hmy/PokemonButtonClick.mp3?token=iNvpdxVOpCaJdjOEbPWnyR1SWmtgl8mvKWx8Dy_HBtw&token_path=%2F4hmy%2F&expires=1619134557
export default ButtonSound;