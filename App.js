/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Badge, Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import {
  View,
  Text
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Card>
            <CardItem header bordered button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                 NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      <Footer>
        <FooterTab>
          <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text style={{color: '#fff'}}>Apps</Text>
          </Button>
          <Button vertical active>
            <Icon active name='home' />
            <Text style={{color: '#fff'}}>Home</Text>
          </Button>
          <Button badge vertical>
            <Badge><Text>2</Text></Badge>
            <Icon name='person' />
            <Text style={{color: '#fff'}}>Category</Text>
          </Button>
          <Button badge vertical>
            <Badge><Text>2</Text></Badge>
            <Icon name='navigate' />
            <Text style={{color: '#fff'}}>Transaction</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>

  );
};


export default App;

