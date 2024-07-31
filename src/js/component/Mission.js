import React from 'react'

import PropTypes from 'prop-types'

import '../../styles/Mission.css'

const Mission = (props) => {
  return (
    <div className={`mission-container ${props.rootClassName} `}>
      <video
        src={props.videoSrc}
        loop
        muted
        // poster="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        preload="auto"
        autoPlay
        playsInline
        // className="component1-video accordion"
      ></video>
    </div>
  )
}

Mission.defaultProps = {
  videoSrc: '../video/Komorebi.mp4',
  rootClassName: '',
}

Mission.propTypes = {
  videoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Mission

