import React from 'react';

export const Small = React.memo(({value}) => {
    //Memo memorizar algo, si las propertis cambian se vuelve a renderizar caso conbtrario usa la version memorizada cuando tenga q redibujar algo
    console.log('Me volvi a llamar :(');
  return (
    <small>{value}</small>
  )
})
