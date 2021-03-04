import React, { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import Slider from 'react-slick';

import './Community.scss';
import img from '../../assets/images/367df723468f39601e7abb8a76e24471.jpg';
import Facebook from '../svg/facebook';
import Twitter from '../svg/twitter';
import Youtube from '../svg/youtube';

export default function Community() {
	const [liveGame] = useState(
		Array.from(Array(10), (v, i) => {
			return { img, title: `Title ${i + 1}`, link: 'https://www.google.com' };
		}),
	);
	const [posts] = useState(
		Array.from(Array(30), (v, i) => {
			return {
				img,
				title: String(i).repeat(48),
				social: ['fb', 'tw', 'yt'][Math.floor(i / 10)],
			};
		}),
	);
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('tw');

	const sliderSetting = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplaySpeed: 3000,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const changeSearchInputHandler = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="section community">
			<div className="container">
				<Typography.Title>Game Community Hub</Typography.Title>
				<Typography.Title level={4}>Live Game Updates</Typography.Title>

				<Slider
					dots={false}
					arrows={true}
					slidesToShow={6}
					slidesToScroll={1}
					responsive={[
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 5,
							},
						},
						{
							breakpoint: 576,
							settings: {
								slidesToShow: 4,
							},
						},
					]}
				>
					{liveGame.map((item) => (
						<div className="card" key={item.title}>
							<div className="img">
								<a href={item.link} target="blank">
									<img src={item.img} alt={item.title} />
								</a>
							</div>
							<Typography.Title level={5}>{item.title}</Typography.Title>
						</div>
					))}
				</Slider>

				<div className="post-title">
					<Typography.Title level={2}>All Post</Typography.Title>
					<div className="ulity">
						<span className="ulity-btn" onClick={() => setCategory('fb')}>
							<Facebook size="40" primary="#2699fb" />
						</span>
						<span className="ulity-btn" onClick={() => setCategory('tw')}>
							<Twitter size="40" primary="#2699fb" secondary="#fff" />
						</span>
						<span className="ulity-btn" onClick={() => setCategory('yt')}>
							<Youtube size="40" secondary="#F00" />
						</span>
						<Input.Search
							style={{ width: 200 }}
							placeholder="Search..."
							size="large"
							className="desktop"
							value={search}
							onChange={changeSearchInputHandler}
						/>
					</div>
				</div>
				<Input.Search
					placeholder="Search..."
					size="large"
					className="mobile"
					value={search}
					onChange={changeSearchInputHandler}
				/>
			</div>

			<Slider {...sliderSetting}>
				{posts
					.filter((slide) => slide.social === category)
					.map((slide, index) => {
						let social;
						switch (slide.social) {
							case 'fb':
								social = (
									<Facebook size="36" primary="#2699fb" secondary="#fff" />
								);
								break;
							case 'tw':
								social = (
									<Twitter size="36" primary="#2699fb" secondary="#fff" />
								);
								break;
							case 'yt':
								social = <Youtube size="36" secondary="#F00" />;
								break;
							default:
								social = <Facebook size="36" />;
								break;
						}
						return (
							<div key={index} className="card-post">
								<div
									className="card-container"
									style={{ backgroundImage: `url('${slide.img}')` }}
								>
									<Typography.Text className="title">
										{slide.title}
									</Typography.Text>
									<div className="social">{social}</div>
									<Button size="large" icon={<ShareAltOutlined />} />
								</div>
							</div>
						);
					})}
			</Slider>
		</div>
	);
}
