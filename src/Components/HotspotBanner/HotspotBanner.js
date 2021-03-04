import React from 'react';
import { Rate, Typography } from 'antd';

import './HotspotBanner.scss';
import nintendologo from '../../assets/images/Image_242.png';
import microsoftlogo from '../../assets/images/Mask_Group_2.png';
import steamlogo from '../../assets/images/steam.png';

export default function HotspotBanner() {
	return (
		<div className="section hotspot">
			<div className="hotspot-content">
				<div className="description">
					<Typography.Title>Gameloft Game</Typography.Title>
					<span className="rating">Rating/Action | </span>
					<Rate disabled defaultValue={4} />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
						excepturi. Quae ipsum porro, error magnam maxime a totam optio autem
						corporis sequi libero blanditiis rerum eligendi nulla tempora
						dignissimos earum?
					</p>
				</div>

				<div className="bottom">
					<div className="content">
						<Typography.Title level={3}>
							Download lastest version
						</Typography.Title>
						<div className="platform">
							<img alt="nintendo" src={nintendologo} />
							<img alt="microsoft" src={microsoftlogo} />
							<img alt="steam" src={steamlogo} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
