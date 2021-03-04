import React from 'react';
import { Col, Row, Select, Typography } from 'antd';
// import { GlobalOutlined } from '@ant-design/icons';

import './Footer.scss';
import Gameloft from '../svg/gameloft';
import Facebook from '../svg/facebook';
import Linkedin from '../svg/linkedin';
import Twitter from '../svg/twitter';
import Youtube from '../svg/youtube';
import Visit from './Visit';
import Legal from './Legal';
// import Global from '../svg/global';

export default function Footer() {
	return (
		<div className="section footer">
			<div className="follow-us-mobile">
				<Typography.Title level={2}>Follow us</Typography.Title>
				<Facebook secondary="#C4E4FF" primary="#2699fb" />
				<Linkedin secondary="#C4E4FF" primary="#2699fb" />
				<Twitter secondary="#C4E4FF" primary="#2699fb" />
				<Youtube secondary="#C4E4FF" primary="#2699fb" />
			</div>
			<Row className="content container">
				<Col md={16} xs={24}>
					<div className="logo">
						<Gameloft color="#FFF" width="360" height="112" />
					</div>
					<div className="follow-us">
						<Typography.Title level={2}>Follow us</Typography.Title>
						<Facebook />
						<Linkedin />
						<Twitter />
						<Youtube />
					</div>
					<Select defaultValue="english" size="large">
						<Select.Option value="english">English</Select.Option>
					</Select>
				</Col>
				<Col md={8} xs={24}>
					<Row>
						<Col md={24} xs={12}>
							<Visit />
						</Col>
						<Col>
							<Legal />
						</Col>
					</Row>
				</Col>
			</Row>
			<div className="bottom">
				<p>
					©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
					are trademarks of Gameloft in the U.S. and/or other countries.
				</p>
				<p>All other trademarks are the property of their respective owners.</p>
			</div>
		</div>
	);
}
