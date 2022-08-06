import { FormEvent, useState, useContext } from 'react';
import styles from '../../../styles/home.module.scss';
import Head from 'next/head';
import Image from 'next/image'

import { AuthContext } from '../../contexts/AuthContext';

import { FiLock } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Button } from '../../components/ui/Button';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { canSSRAuth } from '../../utils/canSSRAuth';
import { canSSRGuest } from '../../utils/canSSRGuest';

export default function SignUp() {
	const { signUp } = useContext(AuthContext)

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSignUp(event: FormEvent) {
		event.preventDefault();

		if (name === '' || email === '' || password === '') {
			toast.warning('Preencha os campos corretamente')
			return;
		}

		let data = {
			name,
			email,
			password
		}

		await signUp(data)
		
	}

  return (
    <>
			<Head>
				<title>TechLib - Faça seu cadastro</title>
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
					<form className={styles.formContainer} onSubmit={handleSignUp}  >
						<h2 className={styles.loginTitle}>Cadastre-se</h2>
						<div className={styles.inputWraper}>
							<FiUser size={20} color="#121B22" className={styles.icon} />
							<input 
								className={styles.input}
								type="text" 
								placeholder='escreva seu nome completo' 
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>	
						</div>
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
							Cadastrar
						</Button>

						<Link href="/" >
							<a className={styles.registryText}>Já possui uma conta? Acesse</a>
						</Link>

					</form>
				</div>

			</div>
		</>
  )
}


export const getServerSideProps = canSSRGuest(async (ctx) => {
	return {
		props: {}
	}
})