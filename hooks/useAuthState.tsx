import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebaseConfig";
import {login, logout, selectUser} from "../slices/userSlice";

// カスタムフック
export const useAuthState = () => {
//    get user current state
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    //onAuthChangedを監視するロジック
    useEffect(() => {
        //onAuthStateChangeedはユーザーのstateが変わった時に毎回呼ばれる
        //サブスクリプションを停止するための関数が返される
        const unsub = onAuthStateChanged(auth, (authUser) => {
            setIsLoading(true)
            // exist User
            if (authUser) {
                dispatch(
                    login({
                        uid:authUser.uid,
                        email:authUser.email!,
                    })
                )
            }else {
                dispatch(logout())
            }
            setIsLoading(false)
            // clean UP 関数
            return ()=>{
                unsub()
            }
        })
    }, [])
    //2つのstateを読み取れるようになる。
    return{
        user,
        isLoading
    }
}