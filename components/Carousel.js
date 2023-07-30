import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://media.istockphoto.com/id/82567372/photo/one-coloured-one-white-pile-of-washing.jpg?s=612x612&w=0&k=20&c=5AyI92AJq3T2UtXc2uB3QbsdPmPn6VcuL3jKvtdGido=",
        "https://media.istockphoto.com/id/1286024201/photo/stacked-and-ready-to-be-packed.jpg?s=612x612&w=0&k=20&c=SgaY2r4P7LTSgnqxRHtYnWCIXXFfhC9OdBPYa35XBMM=",
        "https://media.istockphoto.com/id/1126062309/photo/stack-of-clothes-empty-copy-space.jpg?s=612x612&w=0&k=20&c=r5gXhzHxtvBoiG_RvDM9xE3botrEMMjBZQ2DeVcq_R0=",
        "https://media.istockphoto.com/id/1329022730/photo/stack-of-folded-towels-and-detergents-on-white-table-in-bathroom.jpg?s=612x612&w=0&k=20&c=hiH5LkPeRA7eb-AMVRRwww-idqKEkF3ruEfecW7vjto="

    ]
    return (
        <View>
            <SliderBox images={images} autoplay circleLoop dotColor={"#13274F"} inactiveColor={"#90A4AE"} ImageComponentStyle={{ borderRadius: 6, width: "95%" }} />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})