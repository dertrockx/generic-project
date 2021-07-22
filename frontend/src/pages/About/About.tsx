import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

const About: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>About page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<h1>About page bitch</h1>
			</IonContent>
		</IonPage>
	);
};

export default About;
