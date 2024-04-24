import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const { signup, errors: registerErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
        navigate("/login");
    });

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black'>
                <div className='bg-white p-10 rounded-md'>
                    {registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-blue-500"
                            placeholder='Username'
                        />
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-blue-500"
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-blue-500"
                            placeholder='Password'
                        />
                        <button
                            type='submit'
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    <p className="flex gap-x-2 justify-between">
                        Ya tienes un cuenta? <Link to="/login" className="text-sky-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
