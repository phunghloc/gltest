import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import Slider from 'react-slick';
import { ShareAltOutlined } from '@ant-design/icons';

import './Promotion.scss';
import img from '../../assets/images/367df723468f39601e7abb8a76e24471.jpg';
import Pagination from './Pagination';

export default function Promotion() {
	const [currentPromotion, setCurrentPromotion] = useState(0);
	const [isHover, setIsHover] = useState(false);
	const [promotionSlide] = useState(
		Array.from(Array(6), (v, index) => {
			return {
				img,
				title: `Title ${index + 1}`,
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      doloremque dolorem maxime velit ut animi debitis officiis culpa. Atque
      sequi autem velit praesentium molestias iste accusamus cumque neque,
      amet natus?`,
			};
		}),
	);

	const changePromotionHandler = (prev, next) => {
		setCurrentPromotion(next);
	};

	const sliderSetting = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		beforeChange: changePromotionHandler,
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
		appendDots: (dots) => (
			<div>
				<ul> {dots} </ul>
			</div>
		),
		customPaging: (index) => (
			<div>
				<Pagination
					index={index + 1}
					isCurrent={index === currentPromotion}
					isHover={isHover}
				/>
			</div>
		),
	};

	return (
		<div className="section promotion text-content">
			<div className="container">
				<Typography.Title>Special Events and Promotional</Typography.Title>
				<Typography.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					doloremque dolorem maxime velit ut animi debitis officiis culpa. Atque
					sequi autem velit praesentium molestias iste accusamus cumque neque,
					amet natus?
				</Typography.Text>
			</div>
			<Slider {...sliderSetting}>
				{promotionSlide.map((slide, index) => (
					<div
						key={index}
						className="card"
						onMouseEnter={() => {
							setIsHover(true);
						}}
						onMouseLeave={() => {
							setIsHover(false);
						}}
					>
						<div
							className="card-container"
							style={{ backgroundImage: `url('${slide.img}')` }}
						>
							<Typography.Title className="title">
								{slide.title}
							</Typography.Title>
							<div className="detail">
								<div>
									<Typography.Title>{slide.title}</Typography.Title>
									<Typography.Text>
										{slide.content.slice(0, 96) + '...'}
									</Typography.Text>
								</div>
								<Button type="link" size="large" className="readmore-btn">
									Read more
								</Button>
								<Button
									size="large"
									icon={<ShareAltOutlined />}
									className="share-btn"
								/>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
