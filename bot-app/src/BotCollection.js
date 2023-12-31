import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map(bot => (
        <div key={bot.id} onClick={() => enlistBot(bot)}>
          <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
