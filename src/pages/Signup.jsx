import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-4" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
          <button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">Sign Up</button>
        </form>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-pink-600">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;