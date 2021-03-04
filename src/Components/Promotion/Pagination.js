import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';

export default function Pagination(props) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let timer;
		if (props.isCurrent && !props.isHover) {
			timer = setInterval(() => {
				setProgress((pre) => {
					return pre + 10;
				});
			}, 10);
		}

		return () => {
			clearInterval(timer);
			setProgress(0);
		};
	}, [props.isCurrent, props.isHover]);

	return (
		<Progress
			trailColor="transparent"
			strokeColor="#2699fb"
			percent={progress / 30}
			format={() => String(props.index).padStart(2, 0)}
			type="circle"
			width={60}
		/>
	);
}
