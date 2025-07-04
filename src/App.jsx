import { Layout } from 'antd';
import './App.css'
import './components/ComponentsCss/theme.css'
import AppHeader from './Layout/AppHeader';
import AppContent from './Layout/AppContent';
import AppFooter from './Layout/AppFooter';

const layoutStyle = {
  borderRadius: 8,
  width: '100vw',
  minHeight: '100vh'
};

function App() {
  return (
    <>
      <Layout style={layoutStyle}>
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </Layout>
    </>
  )
}

export default App
