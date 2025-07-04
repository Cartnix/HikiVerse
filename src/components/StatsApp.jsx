import { statsData } from "../assets/Stats";
import './ComponentsCss/Stats.css';

export default function StatsApp() {
    return (
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
        </div>
    )
}