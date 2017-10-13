import React from 'react'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Modal,
    ActivityIndicator

} from  'react-native';
import { Actions } from 'react-native-router-flux';
import {axiosgetUserProfile} from '../Apihelper/servicehelper';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import ActivityIndicatorclass from '../Activityindicator';
import { peopleAction } from '../actions/PeopleAction';

class  Secondscreen extends  React.Component{

        constructor(props) {
            super(props);
            this.state = {
             modalVisible: false,
              error: null,
            };
        }

     getpeopledeatils = () => {
       var userId = 12076;
       this.setState({
         modalVisible: true,
        });
       axiosgetUserProfile(userId,jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse === null) {
          this.setState({
             error,
            modalVisible: false
           });
          }
        else if (jsonResponse.status === 200) {

          this.props.peopleAction(jsonResponse.data);
          this.setState({
             modalVisible: false
           });

           Actions.thirdscreen();
         }
       });

     }
      render(){
          return(
            <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              >
                <View style =  {ActivityIndicatorclass.ViewStyle}>

                  <ActivityIndicator
                    style={[ActivityIndicatorclass.Activityindicatorstyle]}
                      size="large"
                      color="white"
                    />
                    <Text style = {{top: 20,color:'white' }}> Loading....Please wait  </Text>
                  </View>
                </Modal>

                <Text style={styles.welcome}
                  onPress={() => this.getpeopledeatils()}>
                       Welcome to the secondscreen
                  </Text>
              </View>
          );
      }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
function mapStateToProps(state){
  console.log("*************");
  console.log(state);
  return {
     people: state.people,
  };
}
function matchDispatchToProps(dispatch) {
 console.log("#######################");
  return bindActionCreators({
  peopleAction: peopleAction

  },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Secondscreen);
