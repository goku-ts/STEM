import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scale } from 'react-native-size-matters';


import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { images } from '../constants';

type BannerType = {
    image?: any,
    name?: string
    onpress : any
}
const Banner: FC<BannerType> = ({ image, name, onpress }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row"}}>
                <View style={{
                    height: "50%",
                    width: "25%",
                    // marginTop: scale(10),
                    alignItems: "center",
                    marginRight: scale(20),
                    marginLeft: scale(30)
                }}>
                    <Image source={image} style={styles.imageView} />
                </View>
                <View style={{
                
                    justifyContent: "center",
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TouchableOpacity 
                    onPress={onpress}
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: "#00c5ff",
                        justifyContent: "center",
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        height: scale(30),
                        width: scale(90),
                        borderWidth: 1,
                        marginRight:scale(15),
                        borderRadius: scale(10),
                        borderColor : "green"
                    }}>
                        <View>
                            <Text style={{fontSize:SIZES.h2, color:"white", fontWeight:"bold"}}>EXPLORE MORE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

export default Banner

const styles = ScaledSheet.create({
    card: {
        backgroundColor: COLORS.white,
        height: SIZES.height * 0.2,
        width: SIZES.width * 0.9,
        borderRadius: "15@ms",
        elevation: 5,
        shadowOpacity: 0.1,
        shadowOffset: { width: -2, height: 4 },
        justifyContent: "center",
        //alignItems:"center"
    },
    imageView: {
        width: "70@ms",
        height: "70@ms"
    },
    textView: {
        justifyContent: "center",
        alignItems: "center",

    },
    name: {
        ...FONTS.h3
    },
    img_view: {
        justifyContent: "center",
        alignItems: "center",
        height: SIZES.height * 0.23,
        width: SIZES.width * 0.45,
    },
});
