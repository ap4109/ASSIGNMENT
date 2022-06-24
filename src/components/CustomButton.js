import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function CustomButton(props) {
 
    return (
        <View style={{ height: 25, flexDirection: 'row', width: 70, borderRadius: 10, justifyContent: 'space-around', alignItems: "center" ,backgroundColor:'black'}}>
     {props.children}
      
        </View>
    )
}