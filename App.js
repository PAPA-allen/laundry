import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import StackNavigation from './StackNavigation';

export default function App() {
	return (
		<Provider store={store}>
			<StackNavigation />
			<StatusBar style="auto" />
		</Provider>

	);
}

const styles = StyleSheet.create({
});
