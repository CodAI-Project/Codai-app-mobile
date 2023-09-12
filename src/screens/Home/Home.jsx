import { View, Text, ImageBackground, Button, TouchableOpacity, Image } from 'react-native'
import bgFuturistc from '../../../public/bg-futuristic.svg'
import risk from '../../../public/vector-498.svg'
import clock from '../../../public/clock.svg'
import code from '../../../public/code.svg'
import cloud from '../../../public/cloud.svg'
import Styles from './Styles'
import CardHome from '../../components/CardHome/CardHome'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <View style={Styles.container}>
      <View style={Styles.viewOne}>
        <ImageBackground source={bgFuturistc} style={Styles.bgImageOne} imageStyle={{ borderRadius: 16 }}>
          <Text style={Styles.textTitle}>Use o poder da <Text style={{ color: '#3E65CD' }}>IA Generativa</Text> e crie templates</Text>
          <Text style={Styles.textDefault}>Descubra como nossa tecnologia de IA generativa pode ajudar você a criar templates exclusivos e visualmente impressionantes para suas necessidades criativas.</Text>
          <View style={Styles.buttons}>
            <TouchableOpacity style={Styles.buttonOne}><Text style={Styles.buttonOneText}>Comece a usar</Text></TouchableOpacity>
            <TouchableOpacity style={Styles.buttonTwo}><Text style={Styles.buttonTwoText}>Assista a demonstração</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ width: '92%' }}>
        <Text style={{ fontSize: '1.875rem', color: 'white', textAlign: 'center' }}>Eleve seus projetos</Text>
        <View style={{alignItems: 'center', marginLeft: 120}}>
          <Image source={risk} style={Styles.riskImage} />
        </View>
        <Text style={{ color: '#fff', fontSize: '1.25rem' }}>Inicialize suas ideias, de uma maneira mais prática e rápida</Text>
      </View>
      <View style={Styles.viewCards}>
        <CardHome srcImage={clock} title='Gere rapidamente códigos e gere na hora' text="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar" />
        <CardHome srcImage={code} title='Edite os códigos junto com a IA' text="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar" />
        <CardHome srcImage={cloud} title='Baixe o projeto direto pra sua máquina' text="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui', fazendo com que ele tenha uma aparência similar" />
      </View>
      <Footer />
    </View>
  )
}