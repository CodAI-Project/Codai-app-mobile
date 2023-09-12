import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import iconEmail from '../../../public/mail-icon.svg'
import iconPassword from '../../../public/password-icon.svg'
import closeEye from '../../../public/svgexport-4-1.svg'
import openEye from '../../../public/svgexport-3.svg'
import googleIcon from '../../../public/google-icon.svg'
import githubIcon from '../../../public/github-icon.svg'
import firebase_app from '../../firebase/config'
import {
    signInWithEmailAndPassword,
    getAuth
} from "firebase/auth";

const auth = getAuth(firebase_app);

import Styles from './Styles'
import { useEffect, useState } from 'react'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(true)


    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('user');
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.log(e)
            }
        };
        const data = getData();
        data.email && setEmail(data.email)
    }, [])

    function signIn() {
        setError('')
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
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
            })
            .catch((error) => {
                error.code === "auth/account-exists-with-different-credential"
                    ? setError("Usuario já tem esse email usando Google ou Github")
                    : setError("Credenciais inválidas")
            });
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
        } else if (password.length === 0) {
            setError('Digite a senha')
            return
        } else {
            signIn()
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={Styles.container}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Vamos ser <Text style={{ color: '#3e65cd' }}>criativos!</Text></Text>
            <Text style={Styles.subTitle}>Faça login no CodAI para começar a magia</Text>

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
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={showPassword ? openEye : closeEye} style={Styles.imgs} />
                </TouchableOpacity>
            </View>
            {error && <View><Text style={{ color: 'red', marginVertical: 12 }}>*{error}*</Text></View>}
            <View style={{ width: '60%', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ marginVertical: 12 }}><Text style={{ color: '#9CE5C9' }}>Esqueceu a senha?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={(e) => {
                e.preventDefault()
                handleSubmit()
            }} style={Styles.buttonLogin}><Text style={Styles.textButtonLogin}>Login</Text></TouchableOpacity>
            <Text style={{ color: '#fff', marginVertical: 24 }}>Ou continue com</Text>
            <View style={Styles.viewGG}>
                <TouchableOpacity style={Styles.buttonsGG}>
                    <Image source={googleIcon} style={{ height: 28, width: 28, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonsGG}>
                    <Image source={githubIcon} style={{ height: 28, width: 28, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '70%', marginTop: 16, gap: 5 }}>
                <Text style={{ color: '#fff' }}>Não tem conta?</Text>
                <TouchableOpacity onPress={() => navigation.replace('Cadastrar')}><Text style={{ color: '#9CE5C9' }}>Registrar</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}