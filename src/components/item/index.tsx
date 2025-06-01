import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { FilterStatus } from '@/types/filter-status'
import { StatusIcon } from '../status-icon'
import { Trash2 } from 'lucide-react-native'

type ItemData = {
  status: FilterStatus
  description: string
}

type ItemProps = {
  data: ItemData
  onRemove: () => void
  onStatus: ()=>void
}

export function Item({data, onRemove, onStatus}: ItemProps) {
 return (
<View style={styles.container}>
  <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
    <StatusIcon status={data.status}/>
  </TouchableOpacity>
<Text style={styles.description}>{data.description}</Text>
<TouchableOpacity onPress={onRemove}>
  <Trash2 size={18} color="#AAA"/>
</TouchableOpacity>
</View>
)};