import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>This Log in</h2>
            <button onClick={signInWithGoogle}> Google Sign In</button>

        </div>
    );
};

export default Login;