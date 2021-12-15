import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"

import { User } from "../types/api/user"
import { useLoginUser } from "./useLoginUser"
import { useMasage } from "./useMasage"

export const useAuth = () => {
    const histry = useHistory()
    const { showMasage } = useMasage()
    const { setLoginUser } = useLoginUser()

    const [loading, setLoading] = useState(false)
    const login = useCallback((id: string) => {
        setLoading(true)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data){
                const isAdmin = res.data.id === 10 ? true : false
                setLoginUser({...res.data,isAdmin})
                showMasage({title: "ログインしました", status: "success"})
                histry.push("/home")
            }else{
                showMasage({title: "ユーザーが見つかりません", status: "error"})
                setLoading(false)
            }
        }).catch(() => {
            showMasage({title: "ログインできません", status: "error"})
            setLoading(false)
        })
    }, [histry, showMasage, setLoginUser])
    return { login, loading }
}