import React from "react";
import {
	IonTabs,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonIcon,
	IonLabel,
} from "@ionic/react";
import { home, informationCircle } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

function MainTabs() {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path="/home" render={() => <Home />} exact={true} />
				<Route path="/about" render={() => <About />} exact={true} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="home" href="/home">
					<IonIcon icon={home} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>
				<IonTabButton tab="about" href="/about">
					<IonIcon icon={informationCircle} />
					<IonLabel>About</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
}

export default MainTabs;
