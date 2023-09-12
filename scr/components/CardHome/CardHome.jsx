import { View, Text, Image } from 'react-native'
import Styles from './Styles'
import React from 'react'

export default function CardHome({srcImage, title, text}) {
  return (
    <View style={Styles.container}>
      <View style={{padding: 12}}>
        <Image source={srcImage} style={Styles.image}></Image>
      </View>
      <View>
        <Text style={Styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={Styles.text}>{text}</Text>
      </View>
    </View>
  )
}