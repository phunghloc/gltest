import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import {
	DownloadOutlined,
	ArrowLeftOutlined,
	ArrowRightOutlined,
} from '@ant-design/icons';
import Slider from 'react-slick';

import './Exclusive.scss';
import img from '../../assets/images/367df723468f39601e7abb8a76e24471.jpg';

export default function Exclusive() {
	const [slider, setSlider] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [exclusiveImages] = useState(
		Array.from(Array(10), () => {
			return { img };
		}),
	);

	const changeImageHandler = (prev, next) => {
		setCurrentSlide(next);
	};

	const prevSlide = () => {
		slider.slickPrev();
	};

	const nextSlide = () => {
		slider.slickNext();
	};

	const sliderSetting = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		beforeChange: changeImageHandler,
		ref: (slideRef) => setSlider(slideRef),
		responsive: [
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

	return (
		<div className="section exclusive text-content">
			<div className="container">
				<Typography.Title>Exclusive Game Content</Typography.Title>
				<Typography.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					doloremque dolorem maxime velit ut animi debitis officiis culpa. Atque
					sequi autem velit praesentium molestias iste accusamus cumque neque,
					amet natus?
				</Typography.Text>
			</div>

			<Slider {...sliderSetting}>
				{exclusiveImages.map((slide, index) => (
					<div key={index} className="img-container">
						<img src={slide.img} alt={`${index + 1}`} />
						<a href={slide.img} download>
							<Button icon={<DownloadOutlined />} />
						</a>
					</div>
				))}
			</Slider>

			<div className="nav">
				<Button onClick={prevSlide} size="large" type="link">
					<ArrowLeftOutlined />
				</Button>
				<span className="count">
					{String(currentSlide + 1).padStart(2, 0)}/{exclusiveImages.length}
				</span>
				<Button onClick={nextSlide} size="large" type="link">
					<ArrowRightOutlined />
				</Button>
			</div>
		</div>
	);
}
