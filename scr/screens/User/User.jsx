import { View, Text, TouchableOpacity } from 'react-native'
import { getChatsByUserId } from '../../actions/chats'
import React, { useEffect, useState } from 'react'

import Styles from './Styles'

const API_BASE_URL = "https://southamerica-east1-codai-development.cloudfunctions.net/codai"

export default function User({ route, navigation }) {
  const user = route.params.user
  const [loading, setLoading] = useState(true)
  const [textNoChats, setTextNoChats] = useState('')
  const [textLinkSite, setTextLinkSite] = useState('')
  const [chats, setChats] = useState(null)

  useEffect(() => {
    const chatsGet = async () => {
      const response = await getChatsByUserId(user)
      setLoading(false)
      if(response.data.length === 0) {
        setTextNoChats('Você não tem chats, para criar chats entre no link:')
        setTextLinkSite('codai-hub-development.web.app')
        setChats(null)
      } else {
        setChats(response.data)
        console.log('response: ', response);
      }
    }
    chatsGet()
  }, [])


  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>Olá {user.displayName}</Text>
      {loading && <Text style={{color: '#fff', textAlign: 'center', marginTop: '30vh'}}>Carregando chats...</Text>}
      {
      chats 
      ? chats.map((item, index) => (
        <View  key={index} style={{ paddingVertical: 14, width: '80vw', borderRadius: 12, borderWidth: 1, borderColor: '#9CE5C9', marginVertical: 8 }}>
          <TouchableOpacity onPress={(e) => {
            e.preventDefault();
            navigation.push('EditChat', { chatId: item.id, user: user })
          }}><Text style={{ color: '#9CE5C9', fontSize: 16, textAlign: 'center' }}>{item.title}</Text></TouchableOpacity>
        </View>
      ))
      : (
        <View>
          <Text style={{color: '#fff', textAlign: 'center', marginTop: '30vh'}}>{textNoChats}</Text>
          <Text style={{color: '#9CE5C9', textAlign: 'center', marginTop: 6 }}>{textLinkSite}</Text>
        </View>
      )
    }

    </View>
  )
}