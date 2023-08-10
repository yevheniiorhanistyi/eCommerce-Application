import { Link } from 'react-router-dom';

const NotFound404 = (): JSX.Element => (
  <div>
    <h1>Oops! You seem to be lost.</h1>
    <p>Now you can go to main page:</p>
    <Link to="/">Back to main page</Link>
  </div>
);

export default NotFound404;
