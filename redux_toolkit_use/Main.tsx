import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './slice/Slice';

const Main = () => {
    const counting = useSelector((state: { counter: { value: number } }) => state.counter.value);
    const dispatch=useDispatch();
  return (
    <View>
      <Text style={{color:"white", fontSize:20, textAlign:"center"}}>Counter:{counting}</Text>
      <Button title="Increment" onPress={()=>dispatch(increment())}></Button>
      <Button title="Decrement" onPress={()=>dispatch(decrement())}></Button>
      <Button title="Reset" onPress={()=>dispatch(reset())}></Button>
    </View>
  )
}

export default Main;