import React, { useEffect, useState } from 'react';

const App = () => {
  const [bots, setBots] = useState([]);
  const [BotArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setBots(data.bots))
      .catch(error => console.error(error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!BotArmy.includes(bot)) {
      setBotArmy([...BotArmy, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setBotArmy(BotArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setBotArmy(BotArmy.filter(b => b.id !== bot.id));
    })
    .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Bot Collection</h1>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <h2>Bot Army</h2>
      <BotArmy army={BotArmy} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
