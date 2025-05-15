import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"

const Header = () => {
    return (
        <View style={sytles.header}>
            <TouchableOpacity>
                <Image
                source={require('../assets/logo.png')}
                style={sytles.logo}
                />
            </TouchableOpacity>
                        <TouchableOpacity>
                <Image
                source={require('../assets/send.png')}
                style={sytles.send}
                />
            </TouchableOpacity>
        </View>
    )
}

const sytles = StyleSheet.create({
    header: { 
        height: 65,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2
    },
    logo: {
        
    }, 
    send: {
        width: 23,
        height: 23
    }
})

export default Header;
