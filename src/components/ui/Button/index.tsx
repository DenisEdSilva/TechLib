import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean,
	children: ReactNode,
}


export function Button({ loading, children }: ButtonProps) {
	return (
		<button 
			className={styles.button}
			disabled={loading}
		>
			<a className={styles.buttonText}>
				{children} 
			</a>
		</button>
	)
}