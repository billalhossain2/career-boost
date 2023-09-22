import { useNavigate } from "react-router-dom"
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-5'>
        <h1 className='text-5xl font-extrabold'>404!</h1>
        <h1 className='text-5xl font-extrabold'>Not Found!</h1>
        <button className="btn btn-warning" onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default ErrorPage