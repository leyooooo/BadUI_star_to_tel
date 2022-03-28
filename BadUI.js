import { Rate } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [num, setNum] = useState('0123456789');

  const handleChange = (i, e, order) => {
    const newNum =
      num.slice(0, i) +
      order[e] +
      (i < num.length ? num.slice(i + 1, num.length) : '');
    setNum(newNum);
  };

  const getRndOrder = () => {
    let order = '';
    const choices = '123456789'.split('');

    for (let i = 9; i >= 0; i--) {
      const chosenIndex = Math.floor(Math.random() * i);
      const choice = choices.splice(chosenIndex, 1)[0];
      order += choice;
    }
    return order;
  };

  return (
    <div>
      <div>{`tel : ${num}`}</div>
      {num.split('').map((n, i) => {
        const orderNoZero = getRndOrder();
        const order = ['0', ...orderNoZero];

        return (
          <div key={i}>
            <Rate
              count={9}
              value={order.indexOf(n)}
              character={({ index }) => orderNoZero[index]}
              onChange={(e) => handleChange(i, e, order)}
            />
          </div>
        );
      })}
    </div>
  );
};
