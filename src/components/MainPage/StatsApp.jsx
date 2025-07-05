import { statsData } from "../../assets/Stats";
import { motion } from 'framer-motion';
import { FadeInUp } from "../../utils/motionVariant";
import { MotionOnScroll } from '/src/utils/motionScroll.jsx';
import '../ComponentsCss/Stats.css';

export default function StatsApp() {
    return (
        <MotionOnScroll
            initial='hidden'
            animate='visible'
            variants={FadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="statsContainer">

                {statsData.map((stat, index) => (
                    <>
                        <div className="statCard" key={index}>
                            <div className="statValue">{stat.value}</div>
                            <div className="statLabel">{stat.label}</div>
                        </div>
                        {index !== statsData.length - 1 && <div className="statDivider" />}
                    </>
                ))}
            </div >

        </MotionOnScroll>


    )
}

/*
            {statsData.map((stat, index) => (
                <>
                    <div className="statCard" key={index}>
                        <div className="statValue">{stat.value}</div>
                        <div className="statLabel">{stat.label}</div>
                    </div>
                    {index !== statsData.length - 1 && <div className="statDivider" />}
                </>
            ))}
*/