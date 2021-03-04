import React from 'react';
import { Button } from 'antd';
import {
	ShareAltOutlined,
	MailOutlined,
	CustomerServiceOutlined,
} from '@ant-design/icons';

import './SocialIcons.scss';

export default function SocialIcons() {
	return (
		<div className="social-icons">
			<Button size="large" icon={<ShareAltOutlined />} />
			<Button size="large" icon={<MailOutlined />} />
			<Button size="large" icon={<CustomerServiceOutlined />} />
		</div>
	);
}
