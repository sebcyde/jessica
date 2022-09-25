import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {};

type EventType = {
	title: string;
	location: string;
	starts: string;
	ends: string;
};

const DashboardUpcoming = (props: Props) => {
	const Events: EventType[] = [];

	return (
		<div className="width-100 height-100">
			<Alert className="margin-top-thin width-95 margin-left-a margin-right-a">
				<h2 className="margin-bot-thin">Upcoming Events</h2>
				{Events.map((Event) => {
					return (
						<div className="width-100 margin-bot-thin">
							<span>{Event.title}</span>
							<div className="flex just-apart">
								<span>{Event.location}</span>
								<span>
									{Event.starts} - {Event.ends}
								</span>
							</div>
						</div>
					);
				})}

				<div className="width-100 margin-bot-thin">
					<span>Example</span>
					<div className="flex just-apart">
						<span>Tomorow</span>
						<span>2:00</span>
					</div>
				</div>
				<div className="width-100">
					<span>Example</span>
					<div className="flex just-apart">
						<span>Tomorow</span>
						<span>14:30</span>
					</div>
				</div>
			</Alert>
		</div>
	);
};

export default DashboardUpcoming;
