Text -> Basic primitive react element. Used to display some text
View -> display grouping elements that assemble various elements and provides styling to them
Images
Buttons 

JSX converted to basic JS by react native bundler with the help of babel.
babeljs.io is a site where we can see the convertion

StyleSheet.create() will help to strictly follow the syntax(Validates rules). If we make any mistakes in keyword, it will throw an error during runtime which will not happen in inline. E.g: fontSize vs fontsize


While writing HTML tags, have to be careful about semicolons
Cannot display JS object inside text element. Apart from that, we can show texts, numbers or even arrays
We can also assign JSX element to a variable


Flatlist element is used to display array in kind of lists.

Key prop is something used in array that has to be mapped with react. This is bcoz when we change any one value in list, react has to delete the total list and has to process it again from scratch if we don't provide the key.
Key value should be string and unique
Key declartion - 2 ways
    -> declaring during compile time by adding a key attribute to object
    -> run time by taking already available attribute that has key properties and assign it to keyextractor



Buttons - Button and TouchableOpacity
        -> Button - Not greatly customizable
        -> TouchableOpacity - Give great flexibility to customize


StackNavigator is responsible for navigation b/w screens. While loading, stackNavigator will send a props to source page and using the props we can navigate to other pages


Components:
Components are used for reusability.
We just need to pass props from parent file to component(child) and have to use that prop in components page.
This will be helpful if we have to display multiple component in same screen

If we do console.log for checking props of imageSource, we can see that the value assigned to it is just a number but that is fine, as it is assigned by require statement for reference.

props names in our own created tags like <ImageScreen> are just our own user-created name. we can give any names we like.

Props -> Data that we sent from parent to child component
State -> data that will be change over time which has to be get tracked.

useState() is used to declare state variables. It returns an array and hence we destructure it to have a variable name and state function.
We should not directly change the state variable as it will not reflect in screen. state function have to be called with modified value to reflect the changes. Whenever this function gets called, that whole component gets refreshed by react

Reducers:
If all the pieces of states are extremely related and if there is a precise number of ways in which we are going to update those values, we can go for reducers for optimization.
Reducer will have two objects
    -> Object that has all state in it
    -> Object taht describes how we have to make a change
We'll always return a value from reducers
Dispatch function is the one that pass the action item to reducer function.

In reducers, type and payload are for conventions. we can use any name we want.
type -> what's the activity that we are going to do
payload -> the value that is critical to the change


Layout
 -> Box model : Affects one single element 
 -> Flex : Affects multiple child element within one common parent
 -> Position : To overriade Box and Flex model

 Box model -> border, padding, margin
 Flex property will be used to distribute space among children. 

 For position:absolute props, sibling relations are ignored and only some of the parent rules will be applied