import {
    HomeIcon,
    ChatAlt2Icon,
    HeartIcon,
    ClipboardListIcon,
    CogIcon,
    CashIcon,
} from '@heroicons/react/outline'
import { 
    FoodDetails,
    Home, 
    Orders} from '../pages'

const icon_style = "h-6 w-6 text-gray-500 hover:text-white"

export const LeftBarRoutes = [
    {
        id: 1,
        name: 'Home',
        route: '/',
        icon: <HomeIcon className= {icon_style} />
    },
    {
        id: 2,
        name: 'Chat',
        route: '/chat',
        icon: <ChatAlt2Icon className={icon_style} />
    },
    {
        id: 3,
        name: 'Wallet',
        route: '/wallet',
        icon: <CashIcon className={icon_style} />
    },
    {
        id: 4,
        name: 'Orders',
        route: '/orders',
        icon: <ClipboardListIcon className={icon_style} />
    },
    {
        id: 5,
        name: 'Favorite',
        route: '/favorite',
        icon: <HeartIcon className={icon_style} />
    },
    {
        id: 6,
        name: 'Settings',
        route: '/settings',
        icon: <CogIcon className= {icon_style} />
    },
]

export const ChildRoutes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        element: Home,
        permission: false,
    },
    {
        path: "/foodDetails",
        exact: true,
        name: "FoodDetails",
        element: FoodDetails,
        permission: false,
    },
    {
        path: "/orders",
        exact: true,
        name: "Orders",
        element: Orders,
        permission: false,
    },
    
]

const routes = {
    LeftBarRoutes,
    ChildRoutes
}

export default routes;