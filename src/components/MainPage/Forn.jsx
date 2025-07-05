import { TitleViewMotion, ParentStagger, PopIn, SlideInFast } from "../../utils/motionVariant";
import { motion } from "framer-motion";
import { MotionOnScroll } from '/src/utils/motionScroll.jsx';

export default function FormApp() {
    return (
        <form
            action="#" method="POST">
            <h2
                className="statValue">Feedback
            </h2>
            <MotionOnScroll

                variants={ParentStagger}
                initial='hidden'
                animate='visible'

                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                }}>
                <motion.input

                    variants={SlideInFast}
                    custom={0}

                    type="text" placeholder="Email" />
                <motion.input

                    variants={SlideInFast}
                    custom={1}

                    type="password" placeholder="Password" />

                <motion.textarea

                    variants={SlideInFast}
                    custom={2}

                    name="message" placeholder="Enter your message..." rows="6"></motion.textarea>
                <motion.button 
                
                variants={PopIn}
                custom={3}
                
                style={{ width: '30%', alignSelf: 'center' }}>POST</motion.button>
            </MotionOnScroll>
        </form>
    )
}