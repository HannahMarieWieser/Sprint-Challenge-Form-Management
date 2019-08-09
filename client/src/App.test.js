import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

//- [x] Tests for at least one element, one event, and one unit test for a function

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">Log In</span>
  );
});

describe('<App />', () => {
  const wrapper = rtl.render(
    <App/>
  );

  it('main tests',() => {
    
    // Get form elements by their label text
    const Username = wrapper.getByLabelText(container, 'Username')
    expect(Username).toBeTruthy();
    expect(Username).tobeVisible();

    const Password = wrapper.getByLabelText(container, 'Password')
    expect(Password).toBeTruthy();
    expect(Password).tobeVisible();

    // check button firing
    const click = {button}
    fireEvent.click(getByText('Submit!')).click()

  })

  

})