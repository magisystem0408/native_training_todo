import {useState} from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebaseConfig";

export const useFirebaseAuth = () => {
//    hookで管理するやつを定義
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [isLogin, setIsLoading] = useState<boolean>(true)
    const [authErr, setAuthErr] = useState<string>('')

    //loginが押された時の機能
    const login = async () => {
        try {
            // cleanUP
            setAuthErr('')
            // signIn session
            if (email !== '' && password !== '') {
                await signInWithEmailAndPassword(auth, email, password)
            }
        } catch (err: any) {
            setAuthErr(err.message)
            setEmail('')
            setPassword('')
        }
    }
    // registerが押された時の機能
    const register = async () => {
        try {
            setAuthErr('')
            if (email !== '' && password !== '') {
                await createUserWithEmailAndPassword(auth,email, password)
            }
        } catch (err: any) {
            setAuthErr(err.message)
            setEmail('')
            setPassword('')
        }
    }

    const toggleMode =()=>{
        setIsLoading(!isLogin)
        setAuthErr('')
    }
    //呼び出した時に読み込める変数関数、
    return{
        isLogin,
        email,
        password,
        authErr,
        login,
        register,
        setEmail,
        setPassword,
        toggleMode,
    }
}