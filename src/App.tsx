import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './app/layout';
import HomePage from './app/page';
import PortfolioPage from './app/portfolio/page';
import ServicesPage from './app/services/page';
import NotFoundPage from './app/not-found';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
