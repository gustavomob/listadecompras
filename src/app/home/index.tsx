import { View, Image, Text, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { Botao } from "@/components/button"
import { Input } from "@/components/input"
import { Filter } from "@/components/filter"
import { FilterStatus } from "@/types/filter-status"
import { Item } from "@/components/item"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]
const ITEMS = [
  {id: "1", status:FilterStatus.DONE, description: "1 pacote de café" },
  {id: "2", status:FilterStatus.PENDING, description: "1 pacote de açucar" },
  {id: "3", status:FilterStatus.PENDING, description: "1 litro de leite" },
]

export function Home() {
 return (
  <View style={styles.container}>
<Image style={styles.logo} source={require("@/assets/logo.png")}  />
<View style={styles.form}>
<Input placeholder="O que você precisa comprar?"/>
<Botao title="Adicionar" onPress={()=> console.log("Entrar")}/>
</View>
<View style={styles.content}>
  <View style={styles.header}>
  {
    FILTER_STATUS.map((status) =>(
      <Filter key={status} status={status} isActive />
    ))
  }
  <TouchableOpacity style={styles.clearButton}>
  <Text style={styles.clearText}>Limpar</Text>
  </TouchableOpacity>
  </View>  

  <FlatList 
  data={[]}
  keyExtractor={item => item}
  renderItem={({item})=> (
<Item data={item}
  onStatus={()=> console.log("Muda status")}  
  onRemove={()=> console.log("Remover")}   
  />
)}
showsVerticalScrollIndicator={false}
ItemSeparatorComponent={()=> <View style={styles.separator}/>}
contentContainerStyle={styles.listContent}
ListEmptyComponent={()=> <Text style={styles.empty} >Nenhum item na lista</Text>}
  />
</View>
</View>
 )}