import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { patchChatTitle, deleteChat } from '../../actions/chats'
import Styles from './Styles'
import React, { useState } from 'react'

export default function EditChat({ route, navigation }) {
    const user = route.params.user
    const chatId = route.params.chatId
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function chatPatch() {
        setError('')
        if (title.trim().length === 0) {
            setError('Insira um titulo')
            return
        }
        setLoading(true)
        const response = await patchChatTitle(chatId, title, user)
        if (response.status === 200) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'User',
                            params: { user: user },
                        }
                    ],
                })
            );
        } else {
            setLoading(false)
            setError('Ops! ocorreu um erro, tente novamente mais tarde')
        }
    }

    async function chatDelete() {
        setLoading(true)
        setError('')
        const response = await deleteChat(chatId, user)
        if (response.status === 204) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'User',
                            params: { user: user },
                        }
                    ],
                })
            );
        } else {
            setLoading(false)
            setError('Ops! ocorreu um erro, tente novamente mais tarde')
        }
    }

    return (
        <View style={Styles.container}>
            <TextInput
                    style={Styles.input}
                    placeholder='Novo nome para o Chat'
                    autoComplete='off'
                    keyboardType='text'
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
            {loading && <View><Text style={{color: '#9CE5C9', textAlign: 'center'}}>Fazendo alterações...</Text></View>}
            {error && <View><Text style={{ color: 'red', marginVertical: 12 }}>*{error}*</Text></View>}
            <View style={Styles.containerButton}>
                <TouchableOpacity onPress={(e) => {
                    e.preventDefault()
                    chatDelete()
                }} style={Styles.buttonDelete}><Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Deletar chat</Text></TouchableOpacity>
                <TouchableOpacity onPress={(e) => {
                    e.preventDefault()
                    chatPatch()
                }}style={Styles.buttonConfirm}><Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Confirmar edição</Text></TouchableOpacity>
            </View>
        </View>
    )
}