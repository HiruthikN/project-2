/* eslint-disable no-unused-vars */
import React from 'react'
import { Alert } from 'react-bootstrap'
const success = () => {
  return (
    <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
     Your response has been successfully recorded. We appreciate your input!
    </p>
    <hr />
    <p className="mb-0">
    Success! Your action has been completed successfully.
    </p>
  </Alert>
  )
}

export default success
