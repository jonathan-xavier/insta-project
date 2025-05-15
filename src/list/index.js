import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const List = (props) => {

  const mostraLikes = (likers)   => {
    if(likers == 0){
      return;
    }

    return (
      <Text style={styles.likes}>{likers} {likers > 1 ? "curtidas" : "curtida"}</Text>
    )
  }
  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.fotoPerfil}
        />

        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: props.data.imgPublicacao }}
        style={styles.fotoPublicacao}
      />

      <View style={styles.areaBotoes}>
        <TouchableOpacity>
          <Image
            source={
              props.data.likeada
                ? require("../assets/likeada.png")
                : require("../assets/like.png")
            }
            style={styles.iconeLike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../assets/comment.png')}
            style={styles.iconeLike}
          />
          
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../assets/send.png')}
            style={styles.iconeSend}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {props.data.descricao}    
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 18,
    color: "#000",
  },
  fotoPublicacao: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
  areaBotoes: {
    flexDirection: "row",
  },
  iconeLike: {
    height: 30,
    width: 33,
    marginTop: 5,
    marginLeft: 5,
  },
  iconeSend: {
    height: 30,
    width: 33,
    marginTop: 5,
    marginLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5
  },
  nomeRodape: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5
  }, 
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15, 
  }
});

export default List;
