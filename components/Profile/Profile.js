import * as React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';

export function Profile(props) {

  return (
    <View>
    <ScrollView>
      <Text style = {styles.profileText}>
        Profile
      </Text>

      <Text style = {styles.helloText}>
        Hello {props.user}
      </Text>

      
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <Image source={{uri:"https://natarajanlab.mgh.harvard.edu/wp-content/uploads/2021/05/generic-person-icon-1.png"}} style={styles.image}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.proListText}>{props.user}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <Image source={{uri:"https://iconarchive.com/download/i85569/graphicloads/100-flat/email-2.ico"}} style={styles.image}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.proListText}>{props.email}</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button2}>
        <View style={styles.textContainer}>
          <Text style={styles.proListText2}>Edit</Text>
        </View>     
      </TouchableOpacity>

      <Text style = {styles.helloText}>
        Recent Purchases:
      </Text>
      
      <FlatList
        // pass in a props object like data and put it here, then render it
        data={props.data}
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
      />

    </ScrollView>
    </View>
  )
}
// <Text style = {styles.emailText}>
      //   Email:
      // </Text>

      // <TextInput defaultValue={props.email} style={{borderColor: "black", height: 50, width: 390, borderWidth: 1}} editable = {false}/>
const styles = StyleSheet.create({
  profileText: {
    justifyContent: 'flex-start',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 70,
    textAlign:'center',
    color: "black"
  },
  helloText:{
    justifyContent: 'flex-start',
    marginTop: 15,
    fontSize: 30,
    textAlign:'center',
    color: "black",
    fontWeight: "bold"
  },
  
  listText:{
    justifyContent: 'flex-start',
    marginTop: 5,
    fontSize: 30,
    textAlign:'left',
    color: "black"
  },
  button: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "blue",
    borderRadius: "10%",
  },
  button2: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "red",
    borderRadius: "10%",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    objectFit: "fill",
    width: 70,
    height: 70,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
  },
  proListText: {
    fontSize: 25,
    fontWeight: "normal",
  },
  proListText2: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign:'center',
    justifyContent: "center",
    alignItems: "center",
  },
});
