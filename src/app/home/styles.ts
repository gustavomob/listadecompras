import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,    
    alignItems:"center",
    justifyContent:'center',
    backgroundColor: "rgb(234, 238, 234)",
    paddingTop: 62,    
  },
  logo:{
    height: 34,
    width: 250,      
  },
  form:{
    width: "100%",
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42
  },
  content:{
    flex: 1,
    width: "100%",
    backgroundColor:"#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingTop: 32,
    marginTop: 24
  },
  header:{
    width: "100%",
    flexDirection:"row",
    gap: 12, 
    borderBottomWidth: 1,
    borderBottomColor: "rgb(224, 238, 224)",
    paddingBottom: 12
  },
  clearButton:{
    marginLeft: "auto",
    cursor:"pointer"    
  },
  clearText:{
   fontSize: 12,
   fontWeight:"600",
   color:"rgb(133, 131, 131)",   
  },
  separator:{
    width:"100%",
    height:1,
    backgroundColor: "rgb(224, 238, 224)",
    marginVertical: 16
  },
  listContent:{
    paddingTop: 24,
    paddingBottom: 62
  },
  empty:{
    fontSize: 14,
    color: "#808080",
    textAlign:"center"
  }
});