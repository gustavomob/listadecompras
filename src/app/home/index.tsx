import { View, Image, Text, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Botao } from "@/components/button"
import { Input } from "@/components/input"
import { Filter } from "@/components/filter"
import { FilterStatus } from "@/types/filter-status"
import { Item } from "@/components/item"
import { useEffect, useState } from "react"
import {ShoppingBasket} from 'lucide-react-native'
import { itemsStorage, ItemStorage } from "@/storage/items_storage"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]

export function Home() {
 const [items, setItems] = useState<ItemStorage[]>([])
 const [filter, setFilter] = useState(FilterStatus.PENDING); 
 const [description, setDescription] = useState('')

 async function handleAddItems(){
  if(!description.trim()){
    return Alert.alert("Adicionar", "Informe o que deseja comprar")
  }
  const newItem = {
    id: Math.random().toString(36).substring(2),
    description,
    status: FilterStatus.PENDING
  }  
 await itemsStorage.add(newItem)
 await itemsByStatus()

 Alert.alert("Adicionado", `${description}`)
 setFilter(FilterStatus.PENDING)
 setDescription("")
 }

 async function itemsByStatus() {
  try {
    const response = await itemsStorage.getByStatus(filter)
    setItems(response)
  } catch (error) {
    Alert.alert("Erro", "Não foi possível filtrar os itens.")
  }  
 }

 async function handleRemove(id: string) {
  try {
    await itemsStorage.remove(id)
    await itemsByStatus()
  } catch (error) {
    Alert.alert("Error", "Não foi possível remover")
  }
 }

 function handleClear() {
  Alert.alert("Limpar lista", "Deseja remover todos os items da lista?", [
    {text:"Não", style:"cancel"},
    {text:"Sim", onPress: () => onClear()},
  ])
 }

 async function onClear() {
  try {
    await itemsStorage.clear()
    setItems([])
  } catch (error) {
    Alert.alert("Erro", "Não foi possível limpar a lista")
  }
 }

useEffect(()=>{
itemsByStatus()
}, [filter])
 return (
  <View style={styles.container}>
<Image style={styles.logo} source={require("@/assets/logo.png")}  />
<View style={styles.form}>
<Input 
placeholder="O que você precisa comprar?"
onChangeText={setDescription}
value={description}
/>
<Botao title="Adicionar" onPress={handleAddItems}/>
</View>
<View style={styles.content}>
  <View style={styles.header}>
  {
    FILTER_STATUS.map((status) =>(
      <Filter key={status} status={status} 
      isActive={status===filter}
      onPress={()=> setFilter(status)}
      />
    ))
  }
  <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
  <Text style={styles.clearText}>Limpar</Text>
  </TouchableOpacity>
  </View>  
  <FlatList 
  data={items}
  keyExtractor={item => item.id}
  renderItem={({item})=> (

<Item data={item}
  onStatus={()=> console.log("Muda status")}  
  onRemove={()=> handleRemove(item.id)}   
  />
)}
showsVerticalScrollIndicator={false}
ItemSeparatorComponent={()=> <View style={styles.separator}/>}
contentContainerStyle={styles.listContent}
ListEmptyComponent={()=> 
<View style={styles.emptyContainer}>
   <View style={styles.emptyContainer}>
    <ShoppingBasket size={64} color="#e9e9e9" />
    <Text style={styles.emptyContent}>Nenhum item na lista</Text>
  </View>
  </View>
}
  />
</View>
</View>
 )}