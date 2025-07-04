export default function SliderCard({ title, description, image }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 450,
            width: 300,
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 0 8px var(--color-deep-shadow1), 0 0 16px var(--color-deep-shadow2)',
            backdropFilter: 'blur(6px)',
            borderRadius: 16,
            padding: 20,
            color: '#fff',
            fontFamily: 'sans-serif',
            justifyContent: 'flex-start',
        }}>
            <div style={{
                width: 200,
                height: 300,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 20,
                marginBottom: 20
            }} />
            <div style={{ textAlign: 'center' }}>
                <h2 style={{
                    margin: 0,
                    fontSize: '20px',
                    color: 'var(--color-accent)',
                    textShadow: '0 0 10px var(--color-shadow)'
                }}>{title}</h2>

                <p style={{
                    marginTop: 8,
                    fontSize: '14px',
                    lineHeight: 1.4,
                    color: 'var(--color-text)'
                }}>{description}</p>
            </div>
        </div>
    );
}
