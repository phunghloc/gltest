import { Typography } from 'antd';
import React, { Fragment } from 'react';

const legal = [
	{ title: 'Terms of Use', link: 'https://www.google.com' },
	{ title: 'Privacy Policy', link: 'https://www.google.com' },
	{ title: 'Cookies Policy', link: 'https://www.google.com' },
	{ title: 'EULA', link: 'https://www.google.com' },
	{ title: 'Legal Notices', link: 'https://www.google.com' },
	{ title: 'Event Rules', link: 'https://www.google.com' },
	{ title: 'Business Contacts', link: 'https://www.google.com' },
];

export default function Legal() {
	return (
		<Fragment>
			<Typography.Title level={2} className="desktop">Legal</Typography.Title>
			<ul>
				{legal.map((item) => {
					return (
						<li key={item.title}>
							<a target="blank" href={item.link}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}
