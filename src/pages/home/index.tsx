import { canSSRAuth } from "../../utils/canSSRAuth"
import React, { useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/ui/Button"

export default function Home() {
	const { signOut } = useContext(AuthContext);
	function handleSignOut() {
		signOut();
	}

	return (
		<div>
			<h1>Home Screen</h1>
			<Button 
				type="button"
				onClick={handleSignOut} 
			>
				Sair
			</Button>
		</div>
	)
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

	return {
		props: {}
	}
})