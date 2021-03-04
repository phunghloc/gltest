import { Typography } from 'antd';
import React, { Fragment } from 'react';

const visit = [
	{ title: 'Gameloft Games', link: 'https://www.google.com' },
	{ title: 'Gameloft Careers', link: 'https://www.google.com' },
	{ title: 'Gameloft News', link: 'https://www.google.com' },
	{ title: 'Gameloft Forum', link: 'https://www.google.com' },
	{ title: 'Gameloft Corporate', link: 'https://www.google.com' },
	{ title: 'Gameloft Advertising', link: 'https://www.google.com' },
	{ title: 'Gameloft Support', link: 'https://www.google.com' },
];

export default function Visit() {
	return (
		<Fragment>
			<Typography.Title level={2} className="desktop">Visit</Typography.Title>
			<ul>
				{visit.map((item) => {
					return (
						<li key={item.title}>
							<a href={item.link}>{item.title}</a>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}
