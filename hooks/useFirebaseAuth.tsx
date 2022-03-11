import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebaseConfig";

export const useFirebaseAuth =()=>{
//    hookで管理するやつを定義
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [isLogin,setIsLoading] =useState<boolean>(true)
    const [authErr,setAuthErr] = useState<string>('')

    const login =async ()=>{
        try {
            // cleanUP
            setAuthErr('')
            // signIn session
            if(email !=='' && password !==''){
             await signInWithEmailAndPassword(auth,email,password)
            }
        }catch(err:any){

        }
    }
}