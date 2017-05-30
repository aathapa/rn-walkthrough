import { StackNavigator,TabNavigator } from 'react-navigation';
import { Walkthrough,Home }from './container/';

const walkthrough = StackNavigator({
    Walkthrough: {
        screen: Walkthrough
    }
},
{
    headerMode: 'none'
}
)

const MainScreen = StackNavigator({
    Home: {
        screen: Home
    }
})

const AppRouter = StackNavigator({
    walkthrough: {
        screen: walkthrough
    },
    MainScreen: {
        screen: MainScreen
    }  
},
{
    headerMode: 'none'
}
)

export default AppRouter; 