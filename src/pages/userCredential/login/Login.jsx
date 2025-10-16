import { useNavigate } from 'react-router-dom';

function Login() {
    // const para navegar a signUp
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('../signUp/signUp');
    };

    return (
        <>
            <h1>Hola mundo</h1>
            <button onClick={goToSignUp}>
                aun no logueado?
            </button>
        </>
    )
}

export default Login;