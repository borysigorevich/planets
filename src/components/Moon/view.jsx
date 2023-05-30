import React from 'react'
import './styles.css'

export const Moon = ({moon, setCircleCount}) => {

    const [isClicked, setIsClicked] = React.useState(false)

    const handleClick = () => {
        setCircleCount(circleCount => {
            if (isClicked) {
                return circleCount - 1
            } else {
                return circleCount + 1
            }
        })

        setIsClicked(isClicked => !isClicked)
    }

    return (
        <div className={`moon ${isClicked && 'clicked'}`} onClick={handleClick}>
            {moon.title}
        </div>
    );
};