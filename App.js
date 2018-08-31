import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class App extends React.Component {
    render() {
        console.ignoredYellowBox = ['Remote debugger'];
        const image='https://lastfm-img2.akamaized.net/i/u/avatar170s/32f86aa7e0a32973a5b9c7db793167e1.jpg';
        const nombre='WOS';
        const likes=200;
        const comments=140;
        return (
            <View style={styles.container}>
                <View style={styles.artistBox}>
                    <Image style={styles.image} source={{uri:image}} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{nombre}</Text>
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="ios-heart-outline" size={32} color="gray" />
                                <Text style={styles.count}>{likes}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <Ionicons name="ios-chatboxes-outline" size={32} color="gray" />
                                <Text style={styles.count}>{comments}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 50
    },
    image:{
        width:150,
        height:150
    },
    artistBox:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    info:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize:20,
        marginTop: 10
    },
    row:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 25
    },
    iconContainer:{
        flex:1,
        alignItems: 'center'
    },
    count:{
        color:'gray'
    }

});
