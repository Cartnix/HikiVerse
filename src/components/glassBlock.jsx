export function GlassBlock({ srcS, id, description }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 40,
            flexWrap: 'wrap',
            padding: '40px 20px',
        }}>
            <div className='glass-box'>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: '.7',
                    }}
                >
                    <source src={srcS} type="video/webm" />
                </video>
            </div>

            <div style={{
                maxWidth: '400px',
                color: '#fff',
                fontSize: '18px',
                lineHeight: '1.6',
                textAlign: id % 2 === 0 ? 'left' : 'right',
            }}>
                {description}
            </div>
        </div>
    )
}