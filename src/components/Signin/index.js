import React from 'react'
import { Form, FormContent, FormH1, FormLabel, FormWrap, Container, Icon, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">reals</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Entre em sua conta</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Senha</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Entrar</FormButton>
                            <Text>Esqueceu sua senha?</Text>
                        </Form>   
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
