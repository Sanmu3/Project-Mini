import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#020C53',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    marginTop: 50,
    width: '75%',
  },
  password: {
    marginTop: 25,
    width: '75%',
  },
  headerinput: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 5,
  },
  inPass: {
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotpasswordText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  button: {
    width: '75%',
    backgroundColor: '#fff',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
  },
  buttontext: {
    fontSize: 15,
    color: '#020C53',
    fontWeight: 'bold',
  },
  security: {
    justifyContent: 'center',
    marginRight: 10,
  },
  haveAcc: {
    flexDirection: 'row',
    marginTop: 50,
  },
  white: {color: '#fff'},
  fontSignUp: {fontWeight: 'bold', color: '#fff'},
  image: {
    width: 250,
    height: 250,
  },
  loading: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '50%',
    backgroundColor: '#fff',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 50,
  },
});
