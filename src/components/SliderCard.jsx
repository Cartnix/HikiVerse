export default function SliderCard({ title, description, image }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 450,
            width: 300,
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            border: '1px solid rgba(255, 87, 34, 0.4)',
            boxShadow: '0 0 8px rgba(255, 87, 34, 0.5), 0 0 16px rgba(255, 87, 34, 0.2)',
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
                    color: '#ff5722',
                    textShadow: '0 0 10px rgba(255,87,34, 1)'
                }}>{title}</h2>

                <p style={{
                    marginTop: 8,
                    fontSize: '14px',
                    lineHeight: 1.4,
                    color: '#ddd'
                }}>{description}</p>
            </div>
        </div>
    );
}
