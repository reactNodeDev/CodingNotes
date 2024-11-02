// ---------------------------------------- Flatlist ------------------------------------------- //

        // --------------------- Props of Flatlist ------------------- //
    
const carList = [
    {name:'creta', id:'1'},
    {name:'harrier', id:'2'},
    {name:'punch', id:'3'},
    {name:'slavia', id:'4'},
    {name:'verna', id:'5'},
]

    // ----------- Key Extractor ------------- //
// 'KeyExtractor' is a prop used inside Flatlist to give a unique key to each list element
// inside the 'KeyExtractor', we pass a unique propety to give each element a unique key
// if each element inside the list has a 'key' property, we dont need to pass the 'KeyExtractor' inside the list 
// the property which is passed inside 'KeyExtractor' should always be a 'string' and not a 'number'
const List = () => {
    return (
        <View>
            <FlatList keyExtractor={(car)=> car.id} data={carList}/>
        </View>    
    )
}
    // --------------- renderItem ----------------- //
// 'renderItem' takes a function
// the arguments inside 'renderItem' are actually destructured properties of the list-items being passed
// those two destructured properties are 'item' and 'index'.
            // 'item' should always be named 'item' and nothing else. it is the current element being looped
            // 'index' is the index of current element being looped
const List1 = () => {
        return (
            <View>
                <FlatList keyExtractor={(car)=> car.id} data={carList} renderItem={({item})=>{
                    return <Text> {item.name} </Text>;
                }} />
            </View>    
        )
}


    // -------------- horizontal ------------ //
// it makes our list render horizontally instead of vertical
// we just need to pass 'horizontal' inside flatlist and not necessarily need to give it a value and it automatically passes as true
// to hide the horizontal scroll bar of a horizontal list, use 'showsHorizontalScrollIndicator={false}'
const List2 = () => {
    return (
        <View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={(car)=> car.id} data={carList} renderItem={({item})=>{
                return <Text> {item.name} </Text>;
            }} />
        </View>    
    )
}


