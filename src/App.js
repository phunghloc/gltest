import React, { Fragment } from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Exclusive from './Components/Exclusive/Exclusive';
import Promotion from './Components/Promotion/Promotion';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import ContactForm from './Components/ContactForm/ContactForm';
import HotspotBanner from './Components/HotspotBanner/HotspotBanner';
import Community from './Components/Community/Community';

function App() {
	return (
		<Fragment>
			<Header />
			<SocialIcons />
			<ReactFullpage
				scrollOverflow={true}
				render={({ state, fullpageApi }) => {
					return (
						<div id="fullpage-wrapper">
							<HotspotBanner />
							<ContactForm />
							<Community />
							<Promotion />
							<Exclusive />
							<Footer />
						</div>
					);
				}}
			/>
		</Fragment>
	);
}

export default App;
