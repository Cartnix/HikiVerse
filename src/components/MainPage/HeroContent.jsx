import { motion } from "framer-motion";
import {TitleViewMotion, FadeInUp, PopIn,  ParentStagger } from "../../utils/motionVariant";
import '../ComponentsCss/HeroContent.css'

export default function HeroContent() {
    return (
        <article style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <motion.div
                style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: 20 }}
                variants={ParentStagger}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={TitleViewMotion}
                    custom={0}
                >
                    Envision Craft Ignite with <br /><span style={{ color: 'var(--color-accent)' }}>hikiverse</span>
                </motion.h1>
                <motion.p
                    variants={FadeInUp}
                    custom={1}
                    style={{ lineHeight: '1.7', fontSize: '1.2rem', textAlign: 'start', color: 'var(--color-text)' }}
                >
                    Step beyond templates and trends — build something that tells your story with elegance, emotion, and unforgettable energy.
                </motion.p>
                <motion.button
                    variants={PopIn}
                    custom={2}
                    style={{ width: '50%' }}
                >
                    Start now →
                </motion.button>
            </motion.div>
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