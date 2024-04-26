import { Text, View } from "react-native";
import { Button } from "react-native";

export default function HomeScreen({ navigation }){
    return(
<View>
<Text>Bem-Vindo ao News App!💗
    Aqui você pode conferir as últimas notícias da semana😵 </Text>
    <Button
    title="Últimas notícias"
    onPress={()=> navigation.navigate("NewScreen")}/>
    


</View>

    )
}