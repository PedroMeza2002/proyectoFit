import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        await signin(data);
        navigate("/perfil");
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
            <div className="bg-white p-10 rounded-md">
                {Array.isArray(signinErrors) && signinErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white text-center" key={i}>
                        {error}
                    </div>
                ))}
                <form onSubmit={onSubmit} className="mb-4">
                    <input type="email" {...register("email", { required: true })} className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-blue-500" placeholder='Email' />
                    <input type="password" {...register("password", { required: true })} className="w-full bg-white text-black border border-gray-300 rounded-md px-4 py-2 my-2 focus:outline-none focus:border-blue-500" placeholder='Password' />
                    <button type='submit' className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
                </form>
                <p className="flex gap-x-2 justify-between">
                    No tienes un cuenta? <Link to="/register" className="text-sky-500">Crear</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
