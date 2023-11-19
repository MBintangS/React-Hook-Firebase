import {GoogleButton} from "react-google-button"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function SignIn() {
    const navigate = useNavigate()

    const {googleSignIn, user} = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(user != null) {
            navigate('/account')
        }
    }, [user])

  return (
    <div className="">
        <h1 className="text-lg font-semibold">Sign In</h1>
        <GoogleButton onClick={handleGoogleSignIn} className="mx-auto mt-4"/>
    </div>
  )
}
