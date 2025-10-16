import { useNavigate } from 'react-router-dom';

function signUp() {
    const naviate = useNavigate();

    const goToInicio = () => {
        Navigate("../../../App.jsx")
    }
    return (
        <>
            <h1>Register tab</h1>
            <button onClick={goToInicio}>Volver</button>
        </>
    );
};

export default signUp;