import React from 'react';
import { View, TextInput, StyleSheet, Platform, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function MyInput(){

    return(
        <View style={styles.viewInput}>
            <TextInput 
                placeholderTextColor="#555"

                style={styles.input}
                           
            />
        </View>
    )
}

const styles =
 StyleSheet.create({
    viewInput:{
        margin:5,
        flexDirection:'row',
        borderEndWidth:1,
        borderColor:'#A6AAB4',
        borderRadius:10,
        alignItems:'center',
    },

    input:{
        backgroundColor:'#FFFFFF',
        margin: 10,
        flex:1,
        color:'#000000',
        fontSize:16,
         borderRadius:7

    }
})
