import { Tooltip, withStyles } from '@material-ui/core';
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/ExperienceBar.module.css';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience === NaN ? 0 : currentExperience * 100) / experienceToNextLevel;

    const TooltipWithStyles = withStyles({
        tooltip: {
          fontSize: "12px"
        }
      })(Tooltip);

    return (
        <TooltipWithStyles title={`Experiência atual: ${currentExperience} / Próximo nível: ${experienceToNextLevel}`} arrow>
        <header className={styles.experienceBar}>
            <span>XP</span>
            <div>
                <span style={{left: `${percentToNextLevel}%`}} className={styles.currentExperience}>{`${Math.floor(percentToNextLevel)}%`}</span>
                <div style={{width: `${percentToNextLevel}%`}} />
            </div>
            {/* <span>{experienceToNextLevel} xp</span> */}
        </header>
        </TooltipWithStyles>
    )
}