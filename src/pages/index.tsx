import { FormEvent, useState, useContext } from 'react';
import styles from '../../styles/home.module.scss';
import Head from 'next/head';
import Image from 'next/image'

import { AuthContext } from '../contexts/AuthContext';

import { FiLock } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

import logo from '../assets/logo.svg'
import { Button } from '../components/ui/Button';
import { toast } from 'react-toastify';

export default function Home() {
	const { signIn } = useContext(AuthContext)

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin( event : FormEvent ) {
		event.preventDefault();

		if (email === '' || password === '') {
			toast.warning('Preencha os campos corretamente')
			return;
		}

		let data = {
			email, 
			password
		}

		await signIn(data)

	}


  return (
    <>
			<Head>
				<title>TechLib - Biblioteca virtual</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.aplicationDesc}>
					<Image 
						src={logo} 
						alt="logo TechLib"
						className={styles.logoImg}
						height={140}
					/>
					<span><strong>Biblioteca Virtual</strong><br/>Estude, Aprenda e Evolua</span>
				</div>

				<div className={styles.loginContainer}>
					<form className={styles.formContainer} onSubmit={handleLogin}  >
						<div className={styles.inputWraper}>
							<FiMail size={20} color="#121B22" className={styles.icon} />
							<input 
								className={styles.input}
								type="text" 
								placeholder='escreva seu email' 
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>	
						</div>
						<div className={styles.inputWraper} >
							<FiLock size={20} color="#121B22" className={styles.icon} />
							<input 
								className={styles.input}
								type="password" 
								placeholder='sua senha' 
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className={styles.rememberPasswordContainer}>
								<a className={styles.rememberPassword} > Esqueci minha senha</a>
							</div>
						</div>
						
						<Button 
							type="submit" 
							loading={false}
						>
							Acessar
						</Button>

					</form>
				</div>

			</div>
		</>
  )
}
