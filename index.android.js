/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Converter = {
  toAscii: function(bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
      return String.fromCharCode(parseInt(bin, 2))
    })
  },
  toBinary: function(str, spaceSeparatedOctets) {
    return str.replace(/[\s\S]/g, function(str) {
      str = Converter.zeroPad(str.charCodeAt().toString(2));
      return !1 == spaceSeparatedOctets ? str : str + " "
    })
  },
  zeroPad: function(num) {
    return "00000000".slice(String(num).length) + num
  }
};

var helper	=	{
	zeroPad: function(num) {
		return "00000000".slice(String(num).length) + num
	}
}


var Input =	 React.createClass({
	render() {
		return 	<TextInput
			style={{height: 140, borderColor: 'gray', borderWidth: 1,textAlignVertical:'top',paddingLeft:10}}
			onChangeText={this.props.onChange}
			multiline={true}
			value={this.props.text}
		  />
	}
})


var AwesomeProject = React.createClass({
	binaryChange(binaryText){
		this.setState({text:Converter.toAscii(binaryText),binaryText:binaryText})
	},
	textChange(text){
		this.setState({text:text,binaryText:Converter.toBinary(text)})
	},
	getInitialState(){
		return {text:'Merhaba',binaryText:'100110111001011110010110000111000101100001'};
	},
  render() {
    return (
      <View style={styles.container}>
		<Text style={{fontSize:25,textAlign:'center'}}>Text - Binary Converter</Text>
		<Text>Text</Text>
		<Input text={this.state.text} onChange={(text) => this.textChange(text)} />
		<Text>Binary Code</Text>
		<Input text={this.state.binaryText} onChange={(text) => this.binaryChange(text)} />
      </View>
    );
  }
});

class App extends Component{
	render(){
		return <AwesomeProject/>
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => App);

