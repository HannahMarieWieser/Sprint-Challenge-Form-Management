import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">Log In</span>
  );
});

describe('<App />', () => {

  it('main tests',()=>{
    const {getByText} = render(<App />);
    const username = getByText(/^username$/i);
    const password = getByText(/^password$/i);

    //check for event firing - submit
    fireEvent.click(submit);

  })
})