import React from 'react';

interface IBookProps {
	id: number;
	name: string;
	capa: string;
	autor: string;
}

interface PropsType<T> {
	items: T[];
	renderer: (item: T) => React.ReactNode;
}


export function ListViewRenderProps<T extends IBookProps>(
	props: PropsType<T>
) {

	return (
		<ul>
			{props.items.map( (item) => {
				return (
					<>
						<li key={item.id}>{props.renderer(item)}</li>
					</>
				)
			})}
		</ul>
	)
}
