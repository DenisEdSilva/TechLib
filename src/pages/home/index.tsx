import React, { useState, useContext } from 'react';
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from '../../components/ui/Input';
import { ListViewRenderProps } from '../../components/ui/List';
import { FiSearch, FiUser } from 'react-icons/fi';
import { Button } from '../../components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const ROUTE_BOOK_ID = 'book';

interface IBookProps {
	id: number;
	name: string;
	capa: string;
}

interface PropsType {
	items: IBookProps[];
	renderer: (item: IBookProps) => React.ReactNode;
}

export default function Home() {
	const { signOut } = useContext(AuthContext);

	const [search, setSearch] = useState('');

	function handleSignOut() {
		signOut();
	}

	return (
		<div className={styles.container}>
			<div className={styles.searchContainer}>
				<div>
					<Image
							src={Logo} 
							alt="logo TechLib"
							height={80}
						/>
				</div>
				<div className={styles.search}>
					<Input placeholder='Faça sua busca aqui...' value={search} onChange={(e) => setSearch(e.target.value)}/>
					<FiSearch size={25} color="#FFF" />
				</div>
				<div className={styles.userPerfil}>
					<FiUser size={30} color="#FFF" />
					<span className={styles.userName} onClick={handleSignOut}>user.name</span>
				</div>
			</div>
			<div className={styles.shadow}></div>
			<div className={styles.content}>
			<h2 className={styles.booksTitle}>{search ? `Pesquisando por ${search}...` : 'Livros mais acessados'}</h2>
				<div className={styles.bookContainer}>
					<ListViewRenderProps 
						items={[
							{
								id: 1,
								name: 'O segredo nas sombras',
								capa: 'sombras.jpg',
								autor: 'Morgana Moraes'
							},
							{
								id: 2,
								name: 'Sussuros na floresta',
								capa: 'sussuros.jpg',
								autor: 'Maria Silveira'
							},
							{
								id: 3,
								name: 'Labirinto do fauno',
								capa: 'labirinto.jpg',
								autor: 'Cornelia funke'
							},
							{
								id: 4,
								name: 'O segredo nas sombras',
								capa: 'sombras.jpg',
								autor: 'Morgana Moraes'
							},
							{
								id: 5,
								name: 'Sussuros na floresta',
								capa: 'sussuros.jpg',
								autor: 'Maria Silveira'
							},
							{
								id: 6,
								name: 'Labirinto do fauno',
								capa: 'labirinto.jpg',
								autor: 'Cornelia funke'
							},
							{
								id: 7,
								name: 'O segredo nas sombras',
								capa: 'sombras.jpg',
								autor: 'Morgana Moraes'
							},
							{
								id: 8,
								name: 'Sussuros na floresta',
								capa: 'sussuros.jpg',
								autor: 'Maria Silveira'
							},
							{
								id: 9,
								name: 'Labirinto do fauno',
								capa: 'labirinto.jpg',
								autor: 'Cornelia funke'
							},
							{
								id: 10,
								name: 'O segredo nas sombras',
								capa: 'sombras.jpg',
								autor: 'Morgana Moraes'
							},
							{
								id: 11,
								name: 'Sussuros na floresta',
								capa: 'sussuros.jpg',
								autor: 'Maria Silveira'
							},
							{
								id: 12,
								name: 'Labirinto do fauno',
								capa: 'labirinto.jpg',
								autor: 'Cornelia funke'
							},
							{
								id: 13,
								name: 'O segredo nas sombras',
								capa: 'sombras.jpg',
								autor: 'Morgana Moraes'
							},
							{
								id: 14,
								name: 'Sussuros na floresta',
								capa: 'sussuros.jpg',
								autor: 'Maria Silveira'
							},
							{
								id: 15,
								name: 'Labirinto do fauno',
								capa: 'labirinto.jpg',
								autor: 'Cornelia funke'
							},
						]}
						renderer={(item) => (
							<>
								<Image src={require(`../../assets/static/${item.capa}`)} alt="Capa dos livros" width={120} height={160} quality={75} />
								<div>{item.name}</div>
								<span>{item.autor}</span>

								<Link href={{
                                    pathname: ROUTE_BOOK_ID,
                                    query: {
                                        id: item.id
                                    }
                                }} >
									<a className={styles.button}>ver mais</a>
								</Link>
							</>
						)}
					/>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

	return {
		props: {}
	}
})