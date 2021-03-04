import React from 'react';

export default function facebook(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size || '52'}
			height={props.size || '52'}
			viewBox="0 0 52 52"
			fill="#fff"
		>
			<path
				id="facebook_1_"
				data-name="facebook (1)"
				d="M0,0V52H27.232V31.382H20.575V23.318h6.657V16.547A8.917,8.917,0,0,1,36.149,7.63h6.959V14.88h-4.98a2.834,2.834,0,0,0-2.834,2.834v5.6h7.688L41.92,31.382H35.295V51.133H51.133V0Z"
				fill={props.primary || '#fff'}
			/>
		</svg>
	);
}
