import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const PrimaryLayout: React.FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default PrimaryLayout;
