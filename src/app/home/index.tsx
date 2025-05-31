import { View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Botao } from "@/components/button"
import { Input } from "@/components/input"
import { Filter } from "@/components/filter"
import { FilterStatus } from "@/types/filter-status"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]

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
</View>
</View>
 )
 }