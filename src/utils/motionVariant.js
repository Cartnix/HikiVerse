import { delay, spring } from "framer-motion";

export const ParentStagger = {
    visible: {
        transition: {
            staggerChildren: .8,
            delay: .5
        }
    },
    hidden: {}
};

export const ParentStaggerCards = {
    visible: {
        transition: {
            staggerChildren: 2
        }
    },
    hidden: {}
};

export const CardViewMotion = {
    visible: i => ({
        opacity: 1,
        y: 0, x: 0,
        type: spring,
        transition: {
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
        }
    }),
    hidden: i => ({
        opacity: 0,
        y: 0, x: i % 2 === 0 ? -220 : 220,
    })
}

export const TitleViewMotion = {
    visible: i => ({
        opacity: 1,
        y: 0, x: 0,
        transition: {
            duration: 1.3
        }
    }),
    hidden: i => ({
        opacity: 0,
        y: 0, x: i % 2 === 0 ? -220 : 220,
    })
};

export const FadeInUp = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: 'easeOut'
        }
    },
    hidden: {
        opacity: 0,
        y: 50
    }
};

export const PopIn = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'tween',
            duration: .4,
            ease: [0.4, 0, 0.2, 1]
        }
    },
    hidden: {
        opacity: 0,
        scale: 0.6
    }
};

export const SlideInFast = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1] 
        }
    },
    hidden: {
        opacity: 0,
        x: -100
    }
};

