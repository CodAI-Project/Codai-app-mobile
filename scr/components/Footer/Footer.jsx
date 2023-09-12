import { View, Image, Text, ImageBackground } from 'react-native'
import plusoft from '../../../public/plusoft.svg'
import fiap from '../../../public/fiap.svg'
import bg from '../../../public/fundo-partnes.svg'
import Styles from './Styles'

export default function Footer() {
  return (
    <View >
      <ImageBackground source={bg} >
        <View style={Styles.viewImage}>
            <Image source={plusoft} style={Styles.plusoft}/>
            <Image source={fiap} style={Styles.fiap }/>
        </View>
      </ImageBackground>
      <View style={Styles.viewText}>
        <Text style={Styles.textFooter}>© CodAI 2023</Text>
      </View>
    </View>
  )
}