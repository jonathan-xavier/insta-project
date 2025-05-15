import { StyleSheet, Text, View } from "react-native"

export default function Pessoa(data) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Minha lista</Text>
      <Text>{data.nome}</Text>
      <Text>{data.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    areaPessoa: {
    backgroundColor: '#ccc',
    height: 200,
    marginTop: 30,
    padding: 5
  }
})