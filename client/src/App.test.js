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

it('main tests',() => {

  const wrapper = rtl.render(
    <App/>
  );


    
  // Get form elements by their label text
  const Username = wrapper.queryAllByText(/Username/i)
  expect(Username).toBeTruthy();
  expect(Username).tobeVisible();

  const Password = wrapper.queryAllByText(/Password/i)
  expect(Password).toBeTruthy();
  expect(Password).tobeVisible();

  // check button firing
  const click = {button}
  fireEvent.click(getByText('Submit!')).click()

  

  

})