import React from 'react';
import { View, TextInput, StyleSheet, Platform, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function MyInput(props){

    return(
        <View style={styles.viewInput}>
             <Icon name={props.iconName}  style={styles. IconStyle}  />
            <TextInput 
                     {...props}
                     value={props.value}
                     onChangeText={props.onChangeText}
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

    },
    IconStyle:{
        left:10,
        fontSize:30,
        color:"black",
    }
})
