import React from 'react';

import { CardWrapper } from './styled';

function StatusCard(props) {
  return (
    <CardWrapper style={{ borderColor: props.border }}>
      <p>{props.title}</p>
      <h1>{props.count}</h1>
    </CardWrapper>
  );
}

export default StatusCard;
