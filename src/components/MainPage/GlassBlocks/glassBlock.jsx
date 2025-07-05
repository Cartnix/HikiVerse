import '../../ComponentsCss/GlassBoxStyle.css'
import { CardViewMotion, TitleViewMotion, ParentStaggerCards } from "../../../utils/motionVariant";
import { MotionOnScroll } from '/src/utils/motionScroll.jsx';


export function GlassBlock({ srcS, id, description }) {
    return (
        <MotionOnScroll
            variants={ParentStaggerCards}
            style={{
                display: 'flex',
                flexDirection: id % 2 === 0 ? 'row' : 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
                flexWrap: 'wrap',
                padding: '40px 20px',
            }}
        >
            <MotionOnScroll
                variants={CardViewMotion}
                custom={id}
            >
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
            </MotionOnScroll>

            <MotionOnScroll
                variants={TitleViewMotion}
                custom={id}
            >
                <div
                    style={{
                        maxWidth: '400px',
                        fontSize: '2rem',
                        lineHeight: '1.6',
                        textAlign: id % 2 === 0 ? 'left' : 'right',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent2)',
                        fontWeight: 900,
                        letterSpacing: 1.2,
                        textShadow: '0 0 10px var(--color-shadow)',
                    }}
                >
                    <h3>{description}</h3>
                </div>
            </MotionOnScroll>
        </MotionOnScroll>
    );
}
