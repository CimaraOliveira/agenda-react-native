import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {MyInput} from '../components/MyInput';
import { ItemContact } from '../components/ItemContact';


export function Home(){

    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts,setContacts] = useState([]);

    function handlesaveContacts(){
        const data = {
            id: String (new Date().getTime()),
            name: user,
            phone: phone
        }

        setContacts(oldValue => [...oldValue,data]);
        setUser("");
        setPhone("");
    }

    function handleDeleteContact( id ){
        setContacts( contacts.filter (item => item.id != id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.titleHead}>Agenda Telefônica - DDM</Text>
            </View>
            <View style={styles.formContainer}>
            <MyInput iconName="user" textInput="Digite Nome" value={user} onChangeText={(e) => setUser(e)} /> 
             <MyInput iconName="phone" textInput="Digite Telefone" value={phone} onChangeText={(e) => setPhone(e)} keyboardType="numeric" /> 
                                       
                       <TouchableOpacity style={styles.button} onPress={handlesaveContacts}>
                            <Text style={styles.buttonText}>Salvar</Text>
                     </TouchableOpacity>
            </View>

            <View style={styles.list}>  
                <Text style={styles.titleList}>Meus Contatos</Text>
                <FlatList  data={contacts}  
                        keyExtractor={item => item.id} 
                        renderItem={ ({item}) =>  (
                        <ItemContact nome={ item.name } phone={item.phone} apagar={() =>handleDeleteContact(item.id)} />
                    ) }
                /> 
            </View>
            </View>
       
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:40,
        alignItems:'center',
    },
    head:{
        width: '100%',
        height: 35,
        backgroundColor:'#613EEA',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-40,
    },
    titleHead:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    formContainer:{
        width:"85%",
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor: '#613EEA',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        width: 300,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    list:{
        width: "90%",
    },
    titleList:{
        marginTop: 40,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});
