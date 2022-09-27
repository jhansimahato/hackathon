import React from 'react'
import "./linearProg.scss"

const LinearProg = ({location,done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 400);
	
	return (
        <div className="progressContainer">
            <div className="location">{location}</div>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
		    </div>
        </div>
	)
}

export default LinearProg
