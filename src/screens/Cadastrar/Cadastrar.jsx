import { View, Text, Button, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import iconEmail from '../../../public/mail-icon.svg'
import iconPassword from '../../../public/password-icon.svg'
import closeEye from '../../../public/svgexport-4-1.svg'
import openEye from '../../../public/svgexport-3.svg'

import { CommonActions } from '@react-navigation/native'
import firebase_app from '../../firebase/config'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import Styles from './Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'

const auth = getAuth(firebase_app);

export default function Cadastrar({ navigation }) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
        } catch (e) {
            console.log(e)
        }
    };

    async function signUp() {
        setError('')
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha)
            const user = userCredential.user
            await new Promise((resolve, reject) => {
                updateProfile(user, {
                    displayName: `${nome} ${sobrenome}`,
                })
                    .then(() => {
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
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
        } catch (error) {
            console.log(error)
            error.code == "auth/email-already-in-use"
                ? setError("Email já registrado")
                : setError("Erro ao registrar")
        }
    }

    const validateEmail = (emailTest) => {
        return String(emailTest)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function handleSubmit() {
        setError('')
        if (!validateEmail(email)) {
            setError('Digite um email válido')
            return
        } else if (senha.length === 0) {
            setError('Digite a senha')
            return
        } else if (nome.length < 3) {
            setError('Digite um nome válido')
            return
        } else if (sobrenome.length < 3) {
            setError('Digite um sobrenome válido')
            return
        } else if (senha !== confirmarSenha) {
            setError('Senhas diferentes')
            return
        }
        signUp()
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={Styles.container}>
            <View style={{ width: '70%' }}>
                <Text style={Styles.subTitle}>Conecte-se com o poder da velocidade e criatividade</Text>
            </View>

            <View style={Styles.inputContainer}>
                <TextInput
                    style={Styles.input}
                    placeholder='primeiro nome'
                    autoComplete='off'
                    keyboardType='text'
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                />
            </View>
            <View style={Styles.inputContainer}>
                <TextInput
                    style={Styles.input}
                    placeholder='sobrenome'
                    autoComplete='off'
                    keyboardType='text'
                    onChangeText={(text) => setSobrenome(text)}
                    value={sobrenome}
                />
            </View>
            <View style={Styles.inputContainer}>
                <Image source={iconEmail} style={Styles.imgs} />
                <TextInput
                    style={{ justifyContent: 'flex-start', ...Styles.input }}
                    placeholder='email@codai.com'
                    autoComplete='off'
                    keyboardType='text'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={Styles.inputContainerSenha}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={iconPassword} style={Styles.imgs} />
                    <TextInput
                        style={Styles.input}
                        secureTextEntry={showPassword}
                        placeholder='Password'
                        autoComplete='off'
                        keyboardType='text'
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                    />
                </View>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={showPassword ? openEye : closeEye} style={Styles.imgs} />
                </TouchableOpacity>
            </View>
            <View style={Styles.inputContainerSenha}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={iconPassword} style={Styles.imgs} />
                    <TextInput
                        style={Styles.input}
                        secureTextEntry={showConfirmPassword}
                        placeholder='Confirme a senha'
                        autoComplete='off'
                        keyboardType='text'
                        onChangeText={(text) => setConfirmarSenha(text)}
                        value={confirmarSenha}
                    />
                </View>
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Image source={showConfirmPassword ? openEye : closeEye} style={Styles.imgs} />
                </TouchableOpacity>
            </View>
            {error && <Text style={{ color: 'red', marginVertical: 12 }}>*{error}*</Text>}
            <View style={{ width: '60%', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ marginVertical: 12 }}><Text style={{ color: '#9CE5C9' }}>Esqueceu a senha?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.buttonCadastrar} onPress={(e) => {
                e.preventDefault()
                handleSubmit()
            }}><Text style={Styles.textButtonCadastrar}>Criar conta</Text></TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '70%', marginTop: 16, gap: 5 }}>
                <Text style={{ color: '#fff' }}>Ir para o</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}><Text style={{ color: '#9CE5C9' }}>Login</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}