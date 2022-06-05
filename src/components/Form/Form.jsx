import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Form = ({
    onSubmit,
}) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(title, image, comment);
      setTitle('');
      setImage('');
      setComment('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <b>
        TITLE:
        <br />
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </b>
      <br />
      <b>
        IMAGE URL:
        <br />
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
      </b>
      <br />
      <button type="submit">
        <b>ADD MOVIE</b>
      </button>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}
