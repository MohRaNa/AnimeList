import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUsername } from "../../components/hooks/useUsername.jsx";

const LoginScreen = () => {

    // const { username, handleChange } = useUsername();
    const [formUser, setFormUser] = useState({username: "", password: ""});
    const predefinedUser = {username: "M", password: "1"}
    
    const navigate = useNavigate();

    const handleLogin = () => {
        if (formUser.username === predefinedUser.username && formUser.password === predefinedUser.password) {
            navigate("/listAnime")
            ;
        }
        else{
            console.log(formUser.email);
            alert("Wrong username or password");
        }
    }

    return (
        <>  
            <div className= "container d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
                <div className="card">
                    <h5 className="card-header text-center">Login</h5>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            value= {formUser.username}
                            onChange={(e) => setFormUser({...formUser, username: e.target.value})}
                            />
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            value= {formUser.password}
                            onChange={(e) => setFormUser ({...formUser, password: e.target.value})}
                            />
                        </div>
                        <button onClick = {handleLogin} className="btn btn-primary w-100 p-2">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;