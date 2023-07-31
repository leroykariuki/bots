import React from 'react';

const BotCard = ({ bot, addBotToArmy, removeBotFromArmy, dischargeBot }) => {
  const handleAddToArmy = () => {
    addBotToArmy(bot);
  };

  const handleRemoveFromArmy = () => {
    removeBotFromArmy(bot);
  };

  const handleDischargeBot = () => {
    dischargeBot(bot);
  };

  return (
    <div>
      <h3>{bot.name}</h3>
      <p>{bot.description}</p>
      {addBotToArmy && <button onClick={handleAddToArmy}>Add to Army</button>}
      {removeBotFromArmy && <button onClick={handleRemoveFromArmy}>Remove from Army</button>}
      {dischargeBot && <button onClick={handleDischargeBot}>Discharge</button>}
    </div>
  );
};

export default BotCard;
