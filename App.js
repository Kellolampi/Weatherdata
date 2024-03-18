import { StyleSheet, Text, View } from 'react-native';
import  Position   from './components/Position'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 100,
  }, 
  heading: {
    fontSize: 45,
    alignItems: 'flex-start', 
  }
});
