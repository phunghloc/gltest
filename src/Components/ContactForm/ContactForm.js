import React from 'react';
import { Row, Col, Typography, Input, Button, Form, Select } from 'antd';

import './ContactForm.scss';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Minions from '../svg/minions';

export default function ContactForm() {
	return (
		<div className="section contact">
			<Row className="content container">
				<Col xs={24} md={12} className="image">
					<Minions />
				</Col>
				<Col xs={24} md={12} className="form">
					<Typography.Title level={2}>Stay in the know!</Typography.Title>
					<p>Don't get left behind!</p>
					<p>Subscribe to our newsletters today!</p>

					<Form name="contact">
						<Form.Item name="name">
							<Input placeholder="Your name" size="large" />
						</Form.Item>

						<Form.Item name="email">
							<Input placeholder="Your email" size="large" />
						</Form.Item>

						<Form.Item name="country">
							<Select placeholder="Country" size="large">
								{['Vietnam', 'China', 'Other'].map((country) => (
									<Select.Option value={country} key={country}>
										{country}
									</Select.Option>
								))}
							</Select>
						</Form.Item>

						<Form.Item name="platform">
							<Select placeholder="Platform" size="large">
								{['Steam', 'Microsoft', 'Nintendo'].map((platform) => (
									<Select.Option value={platform} key={platform}>
										{platform}
									</Select.Option>
								))}
							</Select>
						</Form.Item>

						<Form.Item
							name="confirm"
							valuePropName="checked"
							className="checkbox first"
						>
							<Checkbox>
								By signing up, I confirm that I am 13 years old or older, I
								agree to the Gameloft Terms and Conditions and I have read the
								Privacy Policy.
							</Checkbox>
						</Form.Item>

						<Form.Item
							name="agree"
							valuePropName="checked"
							className="checkbox second"
						>
							<Checkbox>
								I agree to receive promotional offers relating to all Gameloft
								games and services.
							</Checkbox>
						</Form.Item>

						<Form.Item className="submit-btn">
							<Button htmlType="submit" size="large">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
}
