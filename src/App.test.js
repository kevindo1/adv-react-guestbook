import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';

test('Should be able to sign the book', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );

  //grab all the consts for the input box
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const name = 'Kevin';
  const messageInput = screen.getByRole('textbox', { name: /message/i });
  const message = 'hello';
  const button = screen.getByRole('button', { name: /sign/i });

  // type the name and message, click the sign button
  userEvent.type(nameInput, name);
  userEvent.type(messageInput, message);
  userEvent.click(button);

  // the results that user gets back
  expect(screen.getByRole('heading', { name: /name: kevin/i })).toBeInTheDocument();
  expect(screen.getByText(/message: hello/i)).toBeInTheDocument();
});
