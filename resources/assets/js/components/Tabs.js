import React from 'react';
import { Tabs, Tab, Thumbnail, Nav, NavItem, Row, Col } from "react-bootstrap";

export class HistoryTabs extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			key: 1
		}
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(newKey){
		this.setState({
			key : newKey
		});
	}
	render()
	{
		return (
			<Tab.Container
				id="history-tabs"
				activeKey={this.state.key}
				onSelect={this.handleSelect}
			>
				<Row className="clearfix">
					<Col md={12} xs={12}>
						<Nav bsStyle="tabs" justified>
							<NavItem eventKey={1} className="white-year">2015</NavItem>
							<NavItem eventKey={2} className="white-year">2016</NavItem>
							<NavItem eventKey={3} className="white-year">2017</NavItem>
						</Nav>
					</Col>
					<Col md={12}>
						<Tab.Content animation>
							<Tab.Pane eventKey={1}>
								<div className="history-content-container">
									<Col md={4} xs={12}>
										<div className="history-image-container">
											<img src="/images/gtd_17.jpg" alt="gtd-17" className="img-responsive"/>
										</div>
									</Col>
									<Col md={6} xs={12}>
										<h3> GTD XVII Enigma </h3>
										<div className="history-content">
											<p>
												Greetings, Agents! Welcome to Enigma, the School of Agents! <br/>
												First, I would like to congratulate all of you on retrieving this mission brief from the three-headed
												Cerberus. That hologram had kept the school safe for millennia, which ancient people believed and
												understood to be the “Greek Mythologies”. That is how advanced we are, and you have only scraped
												through the surface.
											</p>

											<p>
												Successful entrance to this School had been no small feat and I am truly proud to have you here. You
												have submitted your applications and your results from the previous institutions that you have
												pursured your studies in, through which we have been able to trace down your childhood background. And boy, you have potentials! Your tenacity, resilience and a dash of strong will have
												been well reflected!
											</p>

											<p>
												In Enigma, you will be within the care of our 4 Squads, codenamed Falcon, Rhino, Mantis and
												Beaver. You will develop certain skillsets we deem fit within each squad and undoubtedly you will be
												able to thrive within the Agency. After successful graduation, you will be deployed to the ‘life’
												outside which you will interact with on a constant basis.
											</p>
											<p>
												We shall commence on our trainings ASAP Agents. There is no time to lose as the world always
												hands on a balance, ready to tip off anytime, especially with the Guerrilla Response Union (GRU)
												minions roaming free on out hinterlands.
											</p>
											<p>
												You better get ready! <br />
												Oh, I forgot to introduce myself. Call me, M. <br />
												Come on, the secret awaits!
											</p>
										</div>
									</Col>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey={2}>
								<div className="history-content-container">
									<Col md={4} xs={12}>
										<div className="history-image-container">
											<img src="/images/gtd_18.jpg" alt="gtd-18" className="img-responsive"/>
										</div>
									</Col>
									<Col md={6} xs={12}>
										<h3> GTD XVIII Aetheria</h3>
										<div className="history-content">
											<p>
												Ignis. Aqua. Terra. Ventus. Long ago, the four tribes lived together in harmony. Under the leadership
												of Avatar Lauw, master of four elements, the balance was kept between the tribes. Then, everything
												changed when a great prophecy was foretold, a prophecy that revealed an imminent great war.
												Upon hearing this prophecy, the four tribes prepared themselves for the war. Diplomatic
												relationships were cut off, trades were stopped, and gates were closed. But when the world needed
												the Avatar most, he vanished. After the disappearance of Avatar Lauw, a war broke out amidst the
												tense situation. People call it... The Great War. Decades have passed since The Great War, and the so
												much has changed in the four tribes, from their identities to their ways of life. Things may have
												stabilised, but there is no peace between the four tribes. One day, a mysterious man appeared. He
												claimed to be the next Avatar. He called himself, Avatar Mist.
											</p>
										</div>
									</Col>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey={3}>
								<div className="history-content-container">
									<Col md={4} xs={12}>
										<div className="history-image-container">
											<img src="/images/gtd_19.jpg" alt="gtd-19" className="img-responsive"/>
										</div>
									</Col>
									<Col md={6} xs={12}>
										<h3> GTD XIX Exixtance</h3>
										<div className="history-content">
											<p>
												In the world of EXIXTANCE, four factions; Fortis the brave, Scitus the intelligent, Probus the honest
												and Pascalis the peaceful coexist in harmony. Each of these factions consists of people who best
												represents the characteristics of the faction itself. It is believed that each of the traits are necessary
												for the prosperity and continuation of the land. To commandeer those four factions to an even
												greater heights, May, a wise and a smart leader was chosen. As a leader, May is a true Divergent
												who can demonstrate all four traits actively.
											</p>
											<p>
												Meanwhile, beneath the abyss of the land, hidden from the surface, a rebellion is brewing. The
												outcasts, thrown away from the selection and unfit of being part of the factions, have joined forces
												and led an intractable group called Factionless. Full of hatred and anger, they have been preparing
												to topple the faction system and conquer the world. A war is approaching. A clash is on the horizon.
												Unity will be tested.
											</p>
											<p className="text-center">
												“One choice decides your path <br />
												One choice defines your beliefs <br />
												One choice determines your loyalties <br />
												One choice can transform you” <br />

												- forever-
											</p>
										</div>
									</Col>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		);
	}
}
