import React, { Component } from 'react';
// Generator Function
export function* testing() {
  while (true) {
    yield 'Number 1';
    yield 'Number 2';
    yield 'Number 3';
  }
}

class Testing extends Component {
  render() {
    // obtain the iterator by calling the generator directly 
    const iterator = testing();

    // in iterator we have next function that is used to extract the value yielded by generator
    // along wigth the yielded value we receive a 'done' flag to inform  us when the generator was completed
    // each time we call iterator.next(), another yield will run and after la last one done = true
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())

    return (
      <div>

      </div>
    )
  }
}

export default Testing;