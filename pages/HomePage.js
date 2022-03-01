import React, { Component } from 'react';
import { StyleSheet, View, Button, ActivityIndicator, Text, ScrollView, Pressable} from 'react-native';

export default class HomePage extends Component {

    constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                dataSource: null,
          }

    }

  static navigationOptions = {
    title: 'POGODYNKA',
    headerStyle: {
               fontFamily: "Fantasy",
               fontWeight: 'bold',
               fontSize: 40,
               textAlign: 'center',
               padding: 20,
               backgroundColor: '#f4511e',
               color: 'black',
    },}


      async componentDidMount () {
          await fetch('https://danepubliczne.imgw.pl/api/data/synop')
          .then((response) => response.json()).then((responseJson) => {
          this.setState({
              isLoading: false,
              dataSource: responseJson,
              })
          })
          .catch((error) => {
              console.log(error)
          });
      }

  render() {
    const { navigate } = this.props.navigation;
    if(this.state.isLoading) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )

        } else {
                let city = this.state.dataSource.map((val, key) => {
                            return <Text style={styles.item}>{val.stacja} {"\n\n"} {val.temperatura} &deg;C </Text>
                });
               return (
                <View>
                <Button title='Szczegółowe dane' onPress={() => navigate('DetailsPage')}></Button>
                <ScrollView>
                    {city}
               </ScrollView>
               </View>
               );
        }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    backgroundColor: '#FFFADF',
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});