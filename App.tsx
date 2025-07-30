import {Text, TextInput, View} from "react-native";
import React, {Component} from "react";
import estilos from "./Lib/Style/style.tsx";
import {AppState} from "./Lib/components/types.ts";

//Interface de estado


class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            nome: ''
        };
        this.pegaNome = this.pegaNome.bind(this);
    }
    pegaNome(texto: string) {
        this.setState({nome: texto});
    }

    render() {
        return (
            <View style={estilos.area}>
                <TextInput style={estilos.botao}
                placeholder="Digite seu nome"
                underlineColorAndroid="transparent"
                onChangeText={this.pegaNome}
                />

                <Text style={estilos.text}>
                    Bem Vindo {this.state.nome}</Text>




            </View>
        )
    }

}
export default App;

