import { Layout } from 'antd';
import { GlassWrapper } from '../components/glassWrapper';

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
    padding: 20,
};

export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>
            <GlassWrapper/>
        </Layout.Content>

    )
}