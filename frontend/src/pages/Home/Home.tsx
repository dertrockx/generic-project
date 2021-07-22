import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonFab,
	IonFabButton,
	IonIcon,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Transactions</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<h1>Hello World</h1>
				{/*-- fab placed to the bottom end --*/}
				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton>
						<IonIcon icon={addCircleOutline} />
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Home;
