import React from 'react';
import Head from "next/head";
import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import { useSelector, useDispatch } from "react-redux";
import Auth from '@/shared/Auth/Auth';
import { Button } from '@/shared/Button';
import styled from 'styled-components'

const Hero = styled.div`
    height: 50vh;
    background-image: url('/images/bild-header2x.jpg');
    background-size: cover;
    position: relative;
`
const ButtonConatiner = styled.div`
    position: absolute;
    right: 5%;
    bottom: 5%;
`
const Tab = styled.div`
    height: 10vh;
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
`
const BAR = styled.div`
    height: 100vh;
    margin-bottom: 500px;
`
const MainSection = styled.div`
    width: 80%;
    margin: auto;
    display:flex;
    justify-content: space-between;
    color: rgb(94, 88, 85)
`
const Left = styled.div`
    width: 25%;
`
const Right = styled.div`
    width: 75%;
    padding-top:3.5em;
`
const ProfileImage = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-image: url('/images/bild-header2x.jpg');
    background-position: center;
    background-size: cover;
    transform: translateY(-2em);
    box-shadow: 4px 4px 10px 4px rgba(50, 50, 50, 0.2);
`
const List = styled.div`
`
const ListItem = styled.div`
    padding: 1em;
    padding-left: 1.5em;
    margin-top:0.4em;
    margin-bottom:0.4em;
    cursor: pointer;
    transition: 0.6s ease;
    :hover{
        border-left: 3px solid black;
    }
`
const Greeting = styled.div`
    font-size: 3rem;
    font-weight: 500;
`
const Heading = styled.div`
    font-size: 1.5em;
    font-weight: 400;
    margin-top: 5vh;
`
const SettingsContainer = styled.div`
    padding: 4em;
    border: 1px solid rgba(50, 50, 50, 0.2);
    margin-top: 2em;
    margin-bottom: 4em;
    display: flex;
    justify-content: space-between;
`
const Identifier = styled.div`
    margin-bottom: 1.5em;
    font-size: 17.5px;
    font-weight: 500;
`
const Field = styled.div`
    color: #B4B4B4;
    margin-bottom: 8px;
    font-size: 12.25px;
`
const Value = styled.div`
margin-bottom: 2em;
`
const InputSection = styled.div`
    width: 60%;
`
const StyledInput = styled.input`
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 1em;
    border-radius: 6px;
    outline: none;
    border: 2px solid rgb(94, 88, 85);
    transition: border 0.2s ease;
    :hover{
        border: 3px solid rgb(94, 88, 85);
    }
    ::placeholder{
        color: rgba(100, 100, 100, 0.6);
        font-size: 12px;
    }
`
const StyledButton = styled.div`
    background-color: rgb(248, 147, 31);
    color: white;
    padding: 1.25em;
    border-radius: 5px;
    display:inline-block;
    cursor: pointer;
    transition: 0.2s ease;
    margin-top: 1.5em;
    :hover{
        background-color: #ffae52;
    }

`
const SubHeader = styled.div`
    margin-bottom: 0.5em;
    font-weight: 500;
    margin-top: 2.5em;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    column-gap: 2em;
`
const GridItem=styled.div`
    width: 100%;
`
const Settings = () => {
    const { customer } = useSelector((state) => state.customer);

    return (
        <>

            <Head> <title> {customer.user && customer.user.name} | Green Cloud Nine </title></Head>
            <Header nav={<Nav />} />
            <Hero>
                <ButtonConatiner>
                    <Button name="Change Header" />
                </ButtonConatiner>
            </Hero>
            <Tab />

            <MainSection>
                <Left>
                    <ProfileImage />
                    <List>
                        <ListItem style={{ fontWeight: 500, borderLeft: '3px solid black' }}>Account and Shop Settings</ListItem>
                        <ListItem>Products</ListItem>
                        <ListItem>Billing</ListItem>
                        <ListItem>Order History</ListItem>
                    </List>
                </Left>
                <Right>
                    <Greeting>Hello Maria!</Greeting>
                    <Heading>My Account Settings</Heading>
                    <SettingsContainer>
                        <div>
                            <Identifier>About Me</Identifier>
                            <Field>Current Name</Field>
                            <Value>Maria Lopez</Value>
                            <Field>Membership Since</Field>
                            <Value>01.01.2021</Value>
                        </div>
                        <InputSection>
                            <SubHeader>Change my Name</SubHeader>
                            <div><StyledInput type="text" placeholder="Current Name" /></div>
                            <div><StyledInput type="text" placeholder="New Name" /></div>
                            <div><StyledInput type="text" placeholder="Confirm New Name" /></div>
                            <StyledButton>Save Changes</StyledButton>

                        </InputSection>
                    </SettingsContainer>

                    <SettingsContainer>
                        <div>
                            <Identifier>Password</Identifier>
                            <Field>Last Changed</Field>
                            <Value>01.01.2021</Value>
                        </div>
                        <InputSection>
                            <SubHeader>Change Password</SubHeader>
                            <div><StyledInput type="text" placeholder="Current Password" /></div>
                            <div><StyledInput type="text" placeholder="New Password" /></div>
                            <div><StyledInput type="text" placeholder="Confirm New Password" /></div>
                            <StyledButton>Save Changes</StyledButton>

                        </InputSection>
                    </SettingsContainer>
                    <SettingsContainer>
                        <div>
                            <Identifier>E-Mail Address</Identifier>
                            <Field>Current E-Mail</Field>
                            <Value>stevejobs@google.io</Value>
                        </div>
                        <InputSection>
                            <SubHeader>Change Email</SubHeader>
                            <div><StyledInput type="text" placeholder="Current E-Mail" /></div>
                            <div><StyledInput type="text" placeholder="New E-Mail" /></div>
                            <div><StyledInput type="text" placeholder="Confirm New E-Mail" /></div>
                            <StyledButton>Save Changes</StyledButton>

                        </InputSection>
                    </SettingsContainer>

                    <SettingsContainer>
                        <div style={{width: '100%'}}>
                            <Identifier>Billing Details</Identifier>
                            <Grid>
                                <GridItem><StyledInput type="text" placeholder="First Name"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="Last Name"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="Company"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="Street Address"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="City"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="Postal Address"/></GridItem>
                                <GridItem><StyledInput type="text" placeholder="VAT"/></GridItem>
                                <GridItem></GridItem>
                            </Grid>
                        </div>
                    </SettingsContainer>
                </Right>
            </MainSection>


            <BAR />
        </>
    );
}

export default Settings;