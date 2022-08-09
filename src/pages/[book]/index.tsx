import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';

const items=[
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
]

export default function Book() {
	const router = useRouter();
	console.log(router)

    for (let book in items) {
        if (items[book].id.toString() === router.query.id) {
            // let {bookId, bookName, bookCapa, bookAutor} = items[book]
        }
            
    }

	return (
		<div>
			<h2>Book Page</h2>
            span
		</div>
	)
}