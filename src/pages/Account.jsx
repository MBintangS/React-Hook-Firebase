import { UserAuth } from "../context/AuthContext";

export default function Account() {

    const {logOut, user} = UserAuth()

    const handleSignOunt = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="text-lg font-semibold space-y-5">
      <h1>ACCOUNT PAGE</h1>
      <p>Selamat Datang, {user?.displayName}</p>
      <button className="border-2 p-2" onClick={handleSignOunt}>Logout</button>
    </div>
  )
}
