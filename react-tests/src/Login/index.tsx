import { FormEvent } from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        navigate('dashboard')
    }

    return (
        <div className={styles.container}>
            <h1>
                Sign in
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="email" id="email" placeholder='Insira seu e-mail' />
                <input type="password" name="text" id="password" placeholder='Insira sua senha' />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}