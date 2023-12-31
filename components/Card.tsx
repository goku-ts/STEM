import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { ScaledSheet } from 'react-native-size-matters';


import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { images } from '../constants';

type CardType = {
    image: any,
    name: string
    onpress?: any
}
const Card: FC<CardType> = ({ image, name, onpress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={onpress}>
            <View style={styles.img_view}>
                <Image source={image} style={styles.imageView} />
            </View>

            <View style={styles.textView}><Text style={styles.name}>{name}</Text></View>
        </TouchableOpacity>
    );
}

export default Card

const styles = ScaledSheet.create({
    card: {
        backgroundColor: COLORS.white,
        height: SIZES.height * 0.28,
        width: SIZES.width * 0.45,
        borderRadius: "15@ms",
        elevation: 5,
        shadowOpacity: 0.1,
        shadowOffset: { width: -2, height: 4 }
    },
    imageView: {
        width: "120@ms",
        height: "120@ms"
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
