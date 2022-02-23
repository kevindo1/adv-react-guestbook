import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';

test.skip('Should be able to sign the book', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  //grab all the consts for the input box
  const messageInput = screen.getByRole('textbox');
  const message = 'hello';
  const button = screen.getByRole('button', { name: /sign/i });

  // type the name and message, click the sign button
  userEvent.type(messageInput, message);
  userEvent.click(button);

  // the results that user gets back
  expect(screen.getByText(/message: hello/i)).toBeInTheDocument();
});
