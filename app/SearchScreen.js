import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FeIcon from "react-native-vector-icons/Feather"

function SearchScreen(props) {
    const [searchValue, setSearchValue] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#F5F9FA" barStyle="dark-content" />

            <View style={{ marginTop: RFPercentage(3), width: "85%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <View style={{ borderRadius: 10, height: RFPercentage(5), width: "80%", flexDirection: "row", backgroundColor: "white", alignItems: "center" }} >
                    <FeIcon style={{ marginLeft: 14, marginRight: 5 }} name="search" color="#a5a5a5" size={RFPercentage(2.5)} />
                    <TextInput
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        placeholder="Search boards"
                        placeholderTextColor="#a5a5a5"
                        style={{ width: "90%", color: "#a5a5a5", fontSize: RFPercentage(2.1), fontFamily: "Metropolis-SemiBold" }}
                    />
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("HistoryScreen")} style={{ width: "15%" }} ><Text style={{ color: "#5C72CA", fontSize: RFPercentage(2.2), fontFamily: "Metropolis-SemiBold" }} >Cancel</Text></TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(3), width: "85%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <ScrollView>
                    <View style={{ flexDirection: "row" }} >
                        <View style={{ borderRadius: RFPercentage(1), backgroundColor: "#32212E", width: RFPercentage(4.5), height: RFPercentage(4.5) }} ></View>
                        <View style={{ marginLeft: RFPercentage(1) }} >
                            <Text style={{ fontSize: RFPercentage(2.4), fontFamily: "Metropolis-SemiBold", color: "black" }} >Bitch</Text>
                            <Text style={{ color: "#a5a5a5", fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(1.8) }} >Shored - with 1 person</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(4), flexDirection: "row" }} >
                        <View style={{ borderRadius: RFPercentage(1), backgroundColor: "#ad9985", width: RFPercentage(4.5), height: RFPercentage(4.5) }} ></View>
                        <View style={{ marginLeft: RFPercentage(1) }} >
                            <Text style={{ fontSize: RFPercentage(2.4), fontFamily: "Metropolis-SemiBold", color: "black" }} >Favorites</Text>
                            <Text style={{ color: "#a5a5a5", fontFamily: "Metropolis-SemiBold", fontSize: RFPercentage(1.8) }} >Private</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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

export default SearchScreen;