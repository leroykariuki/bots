import React from 'react';

const BotCollection = ({ bots, addBotToArmy }) => {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
      ))}
    </div>
  );
};

export default BotCollection;
