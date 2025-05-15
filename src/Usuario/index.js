import React from 'react'
import { StyleSheet, Text, View } from "react-native";
function Usuario({data}) {
    return(
        <View style={styles.container}>

            <Text>Nome:{data.nome}</Text>
            <Text>Nome:{data.profissao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#7159c1'
    },
})

export default Usuario;