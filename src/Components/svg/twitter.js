import React from 'react';

export default function twitter(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size || "52"}
			height={props.size || "52"}
			viewBox="0 0 52 52"
		>
			<g id="twitter" transform="translate(0 -0.053)">
				<rect
					id="Rectangle_1825"
					data-name="Rectangle 1825"
					width="52"
					height="52"
					transform="translate(0 0.053)"
					fill={props.primary || '#fff'}
				/>
				<path
					id="Path_323"
					data-name="Path 323"
					d="M60.36,123.169a22.014,22.014,0,0,0,33.779-18.6q0-.455-.018-.905c.44-.346,3.159-2.526,3.826-3.927a17.854,17.854,0,0,1-4.37,1.134h-.014l.012-.007c.2-.133,2.984-2.028,3.361-4.287a26.816,26.816,0,0,1-3.749,1.563c-.362.12-.741.239-1.132.348a7.724,7.724,0,0,0-13.162,7.025A23.259,23.259,0,0,1,63.039,97.5s-3.692,5.04,2.2,10.222a7.936,7.936,0,0,1-3.336-.995,7.34,7.34,0,0,0,6.1,7.667,7.067,7.067,0,0,1-3.407.143,7.614,7.614,0,0,0,7.1,5.394,14.835,14.835,0,0,1-11.341,3.241Z"
					transform="translate(-53.911 -85.069)"
					fill={props.secondary || "#2699fb"}
				/>
			</g>
		</svg>
	);
}
