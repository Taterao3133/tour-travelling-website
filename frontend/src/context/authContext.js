import { createContext, useReducer, useEffect } from 'react';

// Safely parse user from localStorage
const getUserFromLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error parsing user from localStorage", error);
        return null;
    }
};

// Initial state
const initial_state = {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null,
};

// Create context
const AuthContext = createContext(initial_state);

// Reducer function
const Authreducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return { user: null, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return { user: action.payload, loading: false, error: null };
        case 'LOGIN_FAILURE':
            return { user: null, loading: false, error: action.payload };
        case 'REGISTER_SUCCESS':
            return { user: action.payload, loading: false, error: null };
        case 'LOGOUT':
            return { user: null, loading: false, error: null };
        default:
            return state;
    }
};

// Context Provider
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Authreducer, initial_state);

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(state.user));
        } catch (error) {
            console.error("Error saving user to localStorage", error);
        }
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
