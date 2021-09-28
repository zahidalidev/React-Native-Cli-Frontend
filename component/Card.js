import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FIcon from "react-native-vector-icons/FontAwesome"
import IoIcon from "react-native-vector-icons/Ionicons"

import { TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { TouchableWithoutFeedback } from 'react-native';

function Card({ size, name, id, onPress, image }) {

    const [play, setPlay] = useState(false);

    const ListItemDeleteAction = () => {
        return (
            <TouchableWithoutFeedback key={id + 'i'} onPress={() => onPress(id)} >
                <View style={styles.container}>
                    <FIcon name="trash" size={RFPercentage(2.2)} color="white" />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <Swipeable key={id} containerStyle={{ marginTop: RFPercentage(1), width: "100%" }} renderRightActions={ListItemDeleteAction} >
            <TouchableOpacity onPress={() => setPlay(!play)} activeOpacity={0.8} style={{ marginLeft: "5%", alignItems: "center", borderRadius: 10, padding: 10, flexDirection: "row", width: "90%", backgroundColor: "white" }} >
                <Image source={image} style={{ borderRadius: RFPercentage(1), width: RFPercentage(6), height: RFPercentage(6) }} />
                <View style={{ marginLeft: RFPercentage(1), width: "80%" }} >
                    <Text style={{ fontSize: RFPercentage(2.4), fontFamily: "Metropolis-SemiBold", color: "black" }} >{name}</Text>
                    <View style={{ marginBottom: RFPercentage(1), marginTop: RFPercentage(1), width: "100%", backgroundColor: "#F5F9FA", height: 2 }} >
                        <View style={{ width: "30%", backgroundColor: "#65C8D8", height: 2 }} ></View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <IoIcon style={{ marginRight: 3 }} name={play ? "pause" : "play"} color="black" size={RFPercentage(1.5)} />

                            <Text style={{ color: "#a5a5a5", fontFamily: "Metropolis-Regular", fontSize: RFPercentage(1.8) }} >{size}</Text>
                        </View>
                        <Text style={{ color: "#a5a5a5", fontFamily: "Metropolis-Regular", fontSize: RFPercentage(1.8) }} >400kb</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ce3535",
        width: "11%",
        marginRight: "5%",
        borderRadius: 10,
        // marginLeft: -RFPercentage(5),
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Card;