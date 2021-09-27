import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize"
import FeIcon from "react-native-vector-icons/Feather"
import FIcon from "react-native-vector-icons/Fontisto"


// images
import ppt1 from "../assets/images/ppt1.png"
import fur1 from "../assets/images/fur1.png"
import doc1 from "../assets/images/doc1.png"
import food1 from "../assets/images/food1.png"

function HistoryScreen(props) {

    const [activeButton, setActiveButton] = useState("sent")

    const imagesList = [
        ppt1,
        fur1,
        doc1,
        food1,
        ppt1,
        fur1,
        doc1,
    ]
    const avatarList = [
        ppt1,
        fur1,
        doc1,
        food1,
        ppt1,
    ]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#F5F9FA" barStyle="dark-content" />

            <View style={{ marginTop: RFPercentage(3), width: "85%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <Text style={{ fontFamily: "Metropolis-Medium", fontSize: RFPercentage(3.5) }} >Recents</Text>
                <View style={{ flexDirection: "row" }} >
                    <TouchableOpacity style={{ marginRight: RFPercentage(3) }} >
                        <FeIcon name="search" color="black" size={RFPercentage(3)} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1 }} >
                            <FIcon name="arrow-up-l" color="black" size={RFPercentage(2.2)} />
                            <FIcon style={{ marginLeft: RFPercentage(-1.1) }} name="arrow-down-l" color="black" size={RFPercentage(2.2)} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* send and receive buttons */}
            <View style={{ borderRadius: 8, backgroundColor: "white", marginTop: RFPercentage(5), width: "85%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <TouchableOpacity onPress={() => setActiveButton("sent")} style={{ borderRadius: 8, padding: RFPercentage(1), width: '50%', justifyContent: "center", alignItems: "center", backgroundColor: activeButton === "sent" ? "#65C8D8" : "white" }} >
                    <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(2.2), color: activeButton === "sent" ? "white" : "black" }} >SENT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveButton("received")} style={{ borderRadius: 8, padding: RFPercentage(1), width: '50%', justifyContent: "center", alignItems: "center", backgroundColor: activeButton === "received" ? "#65C8D8" : "white" }} >
                    <Text style={{ fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(2.2), color: activeButton === "received" ? "white" : "black" }} >RECEIVED</Text>
                </TouchableOpacity>
            </View>

            <View style={{ borderRadius: 8, backgroundColor: "white", padding: "5%", marginTop: RFPercentage(2), width: "90%", alignItems: "flex-start" }} >
                <Text style={{ fontFamily: "Metropolis-Bold", fontSize: RFPercentage(3), color: "black" }} >Online Project Report</Text>
                <Text style={{ fontFamily: "Metropolis-Regular", fontSize: RFPercentage(2), color: "#90a3a6" }} >12 Items, 12 MB  15 Sep, 2021</Text>

                <ScrollView style={{ marginTop: RFPercentage(2), marginBottom: RFPercentage(1) }} horizontal={true} showsHorizontalScrollIndicator={false} >
                    {imagesList.map((item, index) => (
                        <Image source={item} key={index} style={{ borderRadius: 8, marginRight: RFPercentage(0.7), width: RFPercentage(10), height: RFPercentage(10) }} />
                    ))}
                </ScrollView>

                <View style={{ marginTop: RFPercentage(1) }}>
                    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                        {avatarList.map((item, index) => (
                            index <= 2 ?
                                <Image source={item} key={index} style={{ borderRadius: RFPercentage(3), marginRight: RFPercentage(-1.2), width: RFPercentage(3.5), height: RFPercentage(3.5) }} />
                                : (index === 3 ?
                                    <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: "#65C8D8", borderRadius: RFPercentage(3), marginRight: RFPercentage(-1.2), width: RFPercentage(3.5), height: RFPercentage(3.5) }} >
                                        <Text style={{ color: "white", fontSize: RFPercentage(2) }} >+3</Text>
                                    </View>
                                    : null
                                )
                        ))}
                    </View>
                    <View></View>
                </View>
            </View>


        </SafeAreaView >
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

export default HistoryScreen;