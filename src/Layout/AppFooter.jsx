import { Layout } from 'antd';

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    background: '#0d0d0d',
    padding: '40px 0 20px 0',
    borderTop: 'none',
    position: 'relative',
};

const gradientLine = {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 5,
    background: 'linear-gradient(90deg, #ff6a00 0%, #ff9900 100%)',
    borderRadius: '0 0 8px 8px',
    zIndex: 2,
};

const iconStyle = {
    width: 28,
    height: 28,
    margin: '0 8px',
    verticalAlign: 'middle',
    filter: 'drop-shadow(0 0 4px #ff6a00)'
};

export default function AppFooter() {
    return (
        <Layout.Footer style={footerStyle}>
            <div style={gradientLine}></div>
            <div style={{marginBottom: 14, marginTop: 10}}>
                <a href="mailto:info@hikiverse.com" style={{color:'#ff6a00', textDecoration:'underline', marginRight:16, fontWeight:600}}>info@hikiverse.com</a>
                <a href="https://t.me/cartnix" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" style={iconStyle} />
                </a>
                <a href="mailto:cartnix21@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="VK" style={iconStyle} />
                </a>
                <a href="https://github.com/Cartnix" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" style={iconStyle} />
                </a>
            </div>
            <div style={{fontSize: '1.1rem', opacity: 0.8, letterSpacing:1, fontWeight:500}}>
                HikiVerse &copy; {new Date().getFullYear()} — Все права защищены
            </div>
        </Layout.Footer>
    )
}