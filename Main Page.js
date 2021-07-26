import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
export default class MainPage extends React.Component {
  render() {
    return (
      <View>
        <View style={{ flex: 0.2, alignItems: 'center' }}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <Text
            style={styles.cancelButtonText}
            onPress={() => {
              this.setState({ isModalVisible: false });
            }}></Text>
        </View>

        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
