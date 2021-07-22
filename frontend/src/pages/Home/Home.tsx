import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonFab,
	IonFabButton,
	IonIcon,
	useIonModal,
	IonButton,
	IonList,
	IonItem,
	IonInput,
	IonLabel,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { useState } from "react";

function Body({ onDismiss }: { onDismiss: () => void }) {
	const [state, setState] = useState<{
		amount: number;
		location: string;
		food: string;
	}>({
		amount: 0,
		location: "",
		food: "",
	});

	return (
		<div className="ion-padding">
			<h1>Add new transaction</h1>
			<IonList>
				<IonItem>
					<IonLabel position="stacked">Amount</IonLabel>
					<IonInput
						name="amount"
						value={state.amount}
						onIonChange={(e) =>
							setState({ ...state, amount: parseInt(e.detail.value || "0") })
						}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Location</IonLabel>
					<IonInput
						name="location"
						value={state.location}
						onIonChange={(e) =>
							setState({ ...state, location: e.detail.value || "" })
						}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Food</IonLabel>
					<IonInput
						name="food"
						value={state.food}
						onIonChange={(e) =>
							setState({ ...state, food: e.detail.value || "" })
						}
					/>
				</IonItem>
			</IonList>
			<IonButton expand="block" onClick={() => onDismiss()}>
				Create
			</IonButton>
		</div>
	);
}

const Home: React.FC = () => {
	const handleDismiss = () => dismiss();
	const [present, dismiss] = useIonModal(Body, {
		onDismiss: handleDismiss,
	});
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
					<IonFabButton onClick={() => present()}>
						<IonIcon icon={addCircleOutline} />
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Home;
