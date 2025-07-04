import { Layout } from 'antd';
import { Button, ConfigProvider, Space } from 'antd';
import { useStyle } from '../hooks/useStyle';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const headerStyle = {
    textAlign: 'center',
    padding: '50px 0',
    background: 'var(--color-header)',
    position: 'sticky',
    width: '100%',
    display: 'flex',
    zIndex: 1000,
    justifyContent: 'space-around',
    alignItems: 'center',
};

const gradientLine = {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 5,
    background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent2) 100%)',
    borderRadius: '0 0 8px 8px',
    zIndex: 2,
};


export default function AppHeader() {

    const { styles } = useStyle();
    const { theme, toggleTheme } = useTheme();

    return (
        <Layout.Header style={headerStyle}>
            <div style={gradientLine}></div>
            <div className="logo">
                <a href="#" style={{ alignItems: 'center', display: 'flex' }}>
                    <img src="./Logo-header.png" alt="Logo" style={{ height: 70, }} />
                </a>
            </div>
            <nav className="nav-list">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Titles</a></li>
                    <li><a href="#">Contacts</a></li>
                    <div onClick={toggleTheme} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                        {theme === 'light' ? <Sun /> : <Moon />}
                    </div>
                </ul>
            </nav>
            <ConfigProvider>
                <Space>
                    <Button
                        size="large"
                        className={styles.outlineButton}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        className={styles.gradientButton}
                    >
                        Sign Up
                    </Button>
                </Space>
            </ConfigProvider>
        </Layout.Header>
    )
}
