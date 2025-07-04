import { Layout } from 'antd';
import { GlassWrapper } from '../components/MainPage/GlassBlocks/glassWrapper';
import HeroContent from '../components/MainPage/HeroContent';
import AutoScrollSlider from '../components/MainPage/Slider/SliderApp';
import StatsApp from '../components/MainPage/StatsApp';
import FormApp from '../components/MainPage/Forn';

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: 'var(--color-text)',
    background: 'var(--color-bg2)',
    display: 'flex',
    flexDirection: 'column',
    gap: 150,
    padding: "80px 20px",
};

export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>
            <HeroContent/>
            <AutoScrollSlider/>
            <StatsApp/>
            <GlassWrapper/>
            <FormApp/>
        </Layout.Content>
    )
}