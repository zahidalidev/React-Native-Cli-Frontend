import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import IoIcon from "react-native-vector-icons/Ionicons"

// components
import Card from '../component/Card';

// images
import food1 from "../assets/images/food1.png"
import folder from "../assets/images/folder.png"
import document from "../assets/images/document.png"
import video from "../assets/images/video.png"

function TransferScreen(props) {
    const [data, setData] = useState([
        {
            name: "IMG_213.jpg",
            size: "250 KB/945 KB",
            image: food1
        },
        {
            name: "Folder Plant",
            size: "250 KB/945 KB",
            image: folder
        },
        {
            name: "Homely.ppt",
            size: "250 KB/945 KB",
            image: document
        },
        {
            name: "Video.mp4",
            size: "250 KB/945 KB",
            image: video
        },
        {
            name: "IMG_213.jpg",
            size: "250 KB/945 KB",
            image: food1
        },
        {
            name: "Folder Plant",
            size: "250 KB/945 KB",
            image: folder
        },
        {
            name: "Homely.ppt",
            size: "250 KB/945 KB",
            image: document
        },
        {
            name: "Video.mp4",
            size: "250 KB/945 KB",
            image: video
        },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <Appbar.Header style={{ backgroundColor: "white", width: "100%", justifyContent: "space-between" }} >
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "stretch" }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("SearchScreen")} style={{ marginLeft: RFPercentage(2) }} >
                        <IoIcon name="caret-back" color="black" size={RFPercentage(2.8)} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                        <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(2.7), marginLeft: RFPercentage(2) }} >Transfer</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: RFPercentage(3.5) }} >
                        <Text style={{ color: "#65c8d8", fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(2) }} >PAUSE</Text>
                    </TouchableOpacity>
                </View>
            </Appbar.Header>

            <ScrollView style={{ width: "100%" }} >
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(2) }} >
                    {data.map((item, i) => (
                        <Card key={i} onPress={(id) => console.log("handle ID: ", id)} size={item.size} name={item.name} image={item.image} id={i} />
                    ))}
                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F5F9FA"
    }
})

export default TransferScreen;