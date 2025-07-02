import { Layout } from 'antd';
import { Button, ConfigProvider, Space } from 'antd';
import { useStyle } from '../hooks/useStyle';

const headerStyle = {
    textAlign: 'center',
    padding: '50px 0',
    background: ' #0d0d0d',
    position: 'sticky',
    top: 0,
    width: '100%',
    display: 'flex',
    zIndex: 1000,
    justifyContent: 'space-around',
    alignItems: 'center',
};


export default function AppHeader() {

    const { styles } = useStyle();

    return (
        <Layout.Header style={headerStyle}>
            <div className="logo">
                <a href="#" style={{ alignItems: 'center', display: 'flex' }}>
                    <img src="./Logo-header.png" alt="Logo" style={{ height: 70, }} />
                </a>
            </div>
            <nav className="nav-list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Titles</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contancts</a></li>
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