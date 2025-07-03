import { Layout } from 'antd';
import { GlassWrapper } from '../components/glassWrapper';
import HeroContent from '../components/HeroContent';

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
    display: 'flex',
    flexDirection: 'column',
    gap: 150,
    
    padding: "80px 20px",
};

export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>
            <HeroContent/>
            <GlassWrapper/>
        </Layout.Content>

    )
}