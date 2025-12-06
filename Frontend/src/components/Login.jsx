import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Toast from "../Utility/Toast"


const Login = ()=>{
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
  
        const handleSubmit = async (event) => {
            event.preventDefault();
            // Get form data
            const formData = new FormData(event.currentTarget);
            const id = formData.get('id') || '';
            const password = formData.get('password') || '';
            
            if (id === 'admin' && password === 'password') {
                navigate("/main/dashboard");
                
            } else {
                setToastMessage("Invalid ID or password. Please try again.");
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }
            
            
            // const formData = new FormData(event.currentTarget);


            // const payload = Object.fromEntries(formData.entries());
            // try {
            //     const res = await fetch("/api/login", {
            //         method: "POST",
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify(payload),
            //     });
            //     if (!res.ok) throw new Error(await res.text());
            //     const data = await res.json();
            //     console.log("Logged in:", data);
            // } catch (err) {
            //     console.error("Login error:", err);
            // }
        };
    return (
        <>
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-xl border border-white/30 p-8 w-96 max-w-md">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Employee Login</h3>
                </div>
                <form method="POST" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input 
                            type="text"
                            name="id"
                            placeholder="Enter your ID" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/70"
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Enter your password" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/70"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 active:scale-95 active:bg-white/40 text-white font-medium py-2 px-4 rounded-md border border-white/30 hover:border-white/50 transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl"
                    >
                        Login
                    </button>
                </form>
            </div>
            
            {/* Toast Notification */}
            {showToast && (<Toast message={toastMessage} setShowToast={setShowToast} />)
            }
        </div>
        </>
    )
}

export default Login