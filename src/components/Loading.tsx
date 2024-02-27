import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Spinner 
        animation="border" 
        role="status"
        aria-hidden="true"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
