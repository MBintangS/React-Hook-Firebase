import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const {user, logOut} = UserAuth()

    const handleSignOunt = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="w-full bg-gray-300 text-lg font-semibold">
        <div className='max-w-[800px] mx-auto py-4 flex justify-between mb-10'>
            <h1>Auth Firebase Google</h1>
            <button onClick={() => [navigate("/")]} >Home</button>
            {user?.displayName  ? <button onClick={handleSignOunt}>logout</button> : <button onClick={() => [navigate("/SignIn")]} >Sign In</button>}
            
        </div>

    </div>
  )
}

export default Navbar
