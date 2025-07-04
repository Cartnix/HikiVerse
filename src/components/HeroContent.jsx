import './ComponentsCss/HeroContent.css'

export default function HeroContent() {

    return (

        <article style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: 20, }}>
                <h1>Envision Craft Ignite with <br /><span style={{ color: '#ff6a00' }}>hikiverse</span></h1>
                <p style={{lineHeight: '1.7',fontSize: '1.2rem', textAlign: 'start'  }}>
                    Step beyond templates and trends — build something that tells your story with elegance, emotion, and unforgettable energy.
                </p>
                <button style={{width: '50%'}}>Start now →</button>
            </div>
            <div className="circle-wrapper">
                <div className="blur-background" />
                <img
                    src="Ichigo_Hero.webp"
                    alt="Ichigo"
                    className="character"
                />
            </div>
        </article>
    )
}