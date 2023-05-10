import { useParams } from "react-router-dom"

const CarPage = () => {
    const { id } = useParams()

    return (
      <div>
        Car Page {id}
      </div>
    )
  }
  
  export default CarPage
  