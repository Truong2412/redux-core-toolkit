export const login = (data)=>{
    return{
        type: 'user/login',
        payload: data
    }
}
export const logout = ()=>{
    return{
        type: 'user/logout'
    }
}
