import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function MotionOnScroll({ children, variants, custom, delay = 2, triggerOnce = true, style }) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce
    });

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={custom}
            transition={{ delay }}
            style={style}
        >
            {children}
        </motion.div>
    );
}
