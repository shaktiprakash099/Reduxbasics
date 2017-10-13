import React from 'react'
import {
View,
Text,
StyleSheet,
FlatList,
TouchableOpacity,
Dimensions,
Alert,
ImageBackground,
ActivityIndicator,
Modal,
Image

} from  'react-native';
import renderIf from 'render-if';
import { Actions } from 'react-native-router-flux';
import {axiosgetUserProfile} from '../Apihelper/servicehelper';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import ActivityIndicatorclass from '../Activityindicator';
import { peopleAction } from '../actions/PeopleAction';

class  thirdscreen extends  React.Component{
  constructor(props){
    super(props);
     this.state = {
              data: [],
             userMaindata:[],
            error: null,
         modalVisible: false,
     }
  }
 _movetosecondscreen = (item) => {
   var userId = item.id;
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

        // Actions.thirdscreen();
        //this.updatetabledataView();

     }
   });

 };

  updatetabledataView =()=>{

    if (this.props.people.DataArray.differentSearchData) {
      var peopleArray = [];
      var userArray = [];
      peopleArray=this.props.people.DataArray.differentSearchData;
      userArray= this.props.people.DataArray.data;
      console.log('**********peopleArray********');
      console.log(peopleArray);
      console.log('**************userArray********');
      console.log(userArray);
      this.setState({
        data:peopleArray,
        userMaindata:userArray,
      });

    }



  }
  componentWillMount(){
  console.log("willmont");

  //this.updatetabledataView();

}

    render(){
    console.log("willmontsdsdvdsvsdvdsvsdvdsvdsv");
    if(this.props.people.DataArray.data.length>0){
     var userlastname  = this.props.people.DataArray.data[0].lastname;
     var userfirstname = this.props.people.DataArray.data[0].firstname;
     var usercityname = this.props.people.DataArray.data[0].state_name;
     }
          return(
            <View>
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

                {renderIf(this.props.people.DataArray.data.length>0)(
                  <View style = {styles.headerviewStyle}>

                  <Text style = {styles.contentTextViewStyle}> First name:-{userfirstname}</Text>
                  <Text style = {styles.contentTextViewStyle}> lastname :-{userlastname}</Text>
                  <Text style = {styles.contentTextViewStyle}> state_name:-{usercityname}</Text>
                  <Text> Not matched try with below </Text>

                  </View>

                )}
       <FlatList
              data={this.props.people.DataArray.differentSearchData}
                loading = {this.state.loading}
                renderItem={
                ({ item }) =>
                    <TouchableOpacity
                        onPress={ () => this._movetosecondscreen(item)}>
                    <View style = {styles.textViewStyle}>


                      <View style = {{flexDirection :'row'}}>

                        <View>
                        <Text style = {styles.contentTextViewStyle}>First name:-{item.firstname}</Text>
                        <Text style = {styles.contentTextViewStyle}>Last name:-{item.state_name}</Text>

                        </View>

                     </View>

                     </View>
                    </TouchableOpacity>

                }
                 keyExtractor={item => item.id}
              >
            </FlatList>
        </View>
          );
      }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#8a9090",
    },
    button: {

        borderRadius: 5,
        width:100,
        height:50,
        top:15,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    headerviewStyle:{
      width: Dimensions.get('window').width - 10,
      margin: 5,
      borderRadius: 5,
      top : 10,
      backgroundColor : 'lightgrey',
      flexDirection: 'column',
      alignItems: 'center',


    },
    textViewStyle :{

        width: Dimensions.get('window').width - 10,
        margin: 5,
        borderRadius: 5,
        top : 10,
        backgroundColor : 'white',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    backgroundImageStyle: {
       flex: 1,
       height: 200,
       width: Dimensions.get('window').width - 10,
       borderRadius: 5,

      //  borderTopLeftRadius: 5,
      // borderTopRightRadius: 5,
        overflow: 'hidden',
      //  justifyContent: 'center',
      //  alignItems: 'center'
   },
   ProfilepicImageStyle: {
      // flex: 1,
      height: 50,
      width: 50,
      borderRadius: 25,
      margin:5,
      borderWidth:1,
     //  borderTopLeftRadius: 5,
     // borderTopRightRadius: 5,
       overflow: 'hidden',
     //  justifyContent: 'center',
     //  alignItems: 'center'
  },

    titleTextViewStyle :{
        // height: 20,
        width: Dimensions.get('window').width - 100,
        margin: 5,
        marginLeft :15,
        color:'#090304',
        flexDirection: 'row',
        fontWeight: "bold",
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    contentTextViewStyle :{
        // height: 20,
        margin: 5,
        marginLeft :15,
        width: Dimensions.get('window').width - 100,
        flexDirection: 'row',
        color:'#545a5a',
        fontSize: 14,
        alignItems: 'flex-end',

    },

    contentviewstyle:{
        top : 40,
        height: 400,
        height: 400,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor:'black',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor : 'white',

    },
    buttonText: {
      top:20,
        color: 'white'
    },

})
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

export default connect(mapStateToProps, matchDispatchToProps)(thirdscreen);
