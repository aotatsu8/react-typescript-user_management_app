import axios from "axios"
import { title } from "process"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"

import { User } from "../types/api/user"
import { useMasage } from "./useMasage"

export const useAuth = () => {
    const histry = useHistory()
    const { showMasage } = useMasage()
    const [loading, setLoading] = useState(false)
    const login = useCallback((id: string) => {
        setLoading(true)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if(res.data){
                showMasage({title: "ログインしました", status: "success"})
                histry.push("/home")
            }else{
                showMasage({title: "ユーザーが見つかりません", status: "error"})
            }
        }).catch(() => showMasage({title: "ログインできません", status: "error"})).finally(() => setLoading(false))
    }, [histry, showMasage])
    return { login, loading }
}