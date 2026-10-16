import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useSessionStorage } from 'usehooks-ts'
export const useAuth = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  //const [token, setToken, removeToken] = useSessionStorage<string | null>('token', null)
  
  // 기존 'token', null 대신 기본값으로 dummyUser.token 할당
  const [token, setToken, removeToken] = useSessionStorage<string | null>('token', dummyUser.token);

  const dummyUser = {
    //email: 'admin@example.com',
    email: 'contact@jokerx04.com',
    password: 'password',
    token: 'auth-token',
  }

  const login = (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      if (email === dummyUser.email && password === dummyUser.password) {
        setToken(dummyUser.token)
        navigate('/', { replace: true })
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    removeToken()
    navigate('/auth/sign-in', { replace: true })
  }

  const isAuthenticated = token

  return {
    login,
    logout,
    isAuthenticated,
    loading,
    error,
  }
}
