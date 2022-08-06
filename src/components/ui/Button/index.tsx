import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss'
import { BiLoaderAlt } from 'react-icons/bi';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean,
	children: ReactNode,
}


export function Button({ loading, children, ...rest }: ButtonProps) {
	return (
		<button 
			className={styles.button}
			disabled={loading}
			{...rest}
		>
			{ loading ? (
				<BiLoaderAlt size={16} color="#fff" />
			) : (
				<a className={styles.buttonText}>
					{children} 
				</a>
			)}
			
		</button>
	)
}