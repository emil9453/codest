import React from 'react'
import PropTypes from 'prop-types'
import styles from './Movie.module.css'

export const Movie = ({ title, image, comment, onClick, isWatched }) => {
  const watchedClass = isWatched ? styles.watched : ''
  return (
    <div className={`${styles.wrapper} ${watchedClass}`}>
      <div>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <span>
        <button onClick={onClick}>{title}</button>
      </span>
      <br />
      <span>{comment}</span>
      <br />
      <br />
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  comment: PropTypes.string,
  onClick: PropTypes.func,
  isWatched: PropTypes.bool,
}
