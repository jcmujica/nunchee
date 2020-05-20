import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Total() {
  const counters = useSelector((state) => state.counters);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    counters.forEach(function (counter) {
      total = total + counter.value;
    })
    setTotal(total)
  }, [counters])

  return (
    <div className="total">
      <h2>Total: {total}</h2>
    </div>
  )
}

export default Total
