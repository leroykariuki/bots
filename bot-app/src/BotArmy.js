import React from 'react';

const BotArmy = ({ army, removeBotFromArmy, dischargeBot }) => {
  return (
    <div>
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          removeBotFromArmy={removeBotFromArmy}
          dischargeBot={dischargeBot}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
