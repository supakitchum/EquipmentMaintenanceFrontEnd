import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () =>
    import ('@/containers/DefaultContainer')

// Views
const Dashboard = () =>
    import ('@/views/Dashboard')

const History = () =>
    import ('@/views/historytoFix/historytechnician')
const Typography = () =>
    import ('@/views/theme/Typography')
const ManageUser = () =>
    import ('@/views/manage/manageUser')
const ManageTech = () =>
    import ('@/views/manage/manageTechnician')
const UpdateProfile = () =>
    import ('@/views/manage/updateProfile')
const UpdateTechnician = () =>
    import ('@/views/manage/updateTechnician')
const InsertUser = () =>
    import ('@/views/manage/insertUser')
const InsertTechnician = () =>
    import ('@/views/manage/insertTechnician')

const Charts = () =>
    import ('@/views/Charts')
const Widgets = () =>
    import ('@/views/Widgets')

// Views - Components
const Cards = () =>
    import ('@/views/base/Cards')
const Forms = () =>
    import ('@/views/base/Forms')
const Switches = () =>
    import ('@/views/base/Switches')
const Tables = () =>
    import ('@/views/base/Tables')
const Tabs = () =>
    import ('@/views/base/Tabs')
const Breadcrumbs = () =>
    import ('@/views/base/Breadcrumbs')
const Carousels = () =>
    import ('@/views/base/Carousels')
const Collapses = () =>
    import ('@/views/base/Collapses')
const Jumbotrons = () =>
    import ('@/views/base/Jumbotrons')
const ListGroups = () =>
    import ('@/views/base/ListGroups')
const Navs = () =>
    import ('@/views/base/Navs')
const Navbars = () =>
    import ('@/views/base/Navbars')
const Paginations = () =>
    import ('@/views/base/Paginations')
const Popovers = () =>
    import ('@/views/base/Popovers')
const ProgressBars = () =>
    import ('@/views/base/ProgressBars')
const Tooltips = () =>
    import ('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () =>
    import ('@/views/buttons/StandardButtons')
const ButtonGroups = () =>
    import ('@/views/buttons/ButtonGroups')
const Dropdowns = () =>
    import ('@/views/buttons/Dropdowns')
const BrandButtons = () =>
    import ('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () =>
    import ('@/views/icons/Flags')
const FontAwesome = () =>
    import ('@/views/icons/FontAwesome')
const SimpleLineIcons = () =>
    import ('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () =>
    import ('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () =>
    import ('@/views/notifications/Alerts')
const Badges = () =>
    import ('@/views/notifications/Badges')
const Modals = () =>
    import ('@/views/notifications/Modals')

// Views - Pages
const Page404 = () =>
    import ('@/views/pages/Page404')
const Page500 = () =>
    import ('@/views/pages/Page500')
const Register = () =>
    import ('@/views/pages/Register')
const Login = () =>
    import ('@/views/Login')
    // Users
const Users = () =>
    import ('@/views/users/Users')
const User = () =>
    import ('@/views/users/User')
const Profile = () =>
    import ('@/views/users/Profile')
const usersHistory = () =>
    import ('@/views/users/History')
const Repair = () =>
    import ('@/views/users/Repairs')
const AddRepair = () =>
    import ('@/views/users/AddRepair')





Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: DefaultContainer,
            children: [{
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }, {
                    path: 'history',
                    name: 'History',
                    component: History
                },
                {
                    path: 'manageuser',
                    name: 'ManageUser',
                    component: ManageUser
                }, {
                    path: 'ManageTechnician',
                    name: 'ManageTech',
                    component: ManageTech
                },
                {
                    path: 'updateProfile/:email',
                    name: 'UpdateProfile',
                    component: UpdateProfile
                }, {
                    path: 'updateTechnician/:email',
                    name: 'UpdateTechnician',
                    component: UpdateTechnician
                },
                {
                    path: 'insertUser',
                    name: 'InsertUser',
                    component: InsertUser
                }, {
                    path: 'insertTechnician',
                    name: 'InsertTechnician',
                    component: InsertTechnician
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
                },
                {
                    path: 'users',
                    meta: {
                        label: 'Users'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            component: Users,
                        },
                        {
                            path: 'profile',
                            meta: {
                                label: 'Profile'
                            },
                            name: 'User',
                            component: Profile,
                        },
                        {
                            path: 'history',
                            meta: {
                                label: 'History'
                            },
                            name: 'History',
                            component: usersHistory,
                        },
                        {
                            path: 'repair',
                            meta: {
                                label: 'Repair'
                            },
                            name: 'Repair',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [{
                                    path: '',
                                    component: Repair,
                                },
                                {
                                    path: 'add',
                                    meta: {
                                        label: 'Add'
                                    },
                                    name: 'Add',
                                    component: AddRepair
                                }
                            ]
                        },
                    ]
                },
                {
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: 'cards',
                            name: 'Cards',
                            component: Cards
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs
                        },
                        {
                            path: 'breadcrumbs',
                            name: 'Breadcrumbs',
                            component: Breadcrumbs
                        },
                        {
                            path: 'carousels',
                            name: 'Carousels',
                            component: Carousels
                        },
                        {
                            path: 'collapses',
                            name: 'Collapses',
                            component: Collapses
                        },
                        {
                            path: 'jumbotrons',
                            name: 'Jumbotrons',
                            component: Jumbotrons
                        },
                        {
                            path: 'list-groups',
                            name: 'List Groups',
                            component: ListGroups
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars
                        },
                        {
                            path: 'paginations',
                            name: 'Paginations',
                            component: Paginations
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers
                        },
                        {
                            path: 'progress-bars',
                            name: 'Progress Bars',
                            component: ProgressBars
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: 'standard-buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons
                        },
                        {
                            path: 'button-groups',
                            name: 'Button Groups',
                            component: ButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons
                        }
                    ]
                },
                {
                    path: 'icons',
                    redirect: '/icons/font-awesome',
                    name: 'Icons',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: 'coreui-icons',
                            name: 'CoreUI Icons',
                            component: CoreUIIcons
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags
                        },
                        {
                            path: 'font-awesome',
                            name: 'Font Awesome',
                            component: FontAwesome
                        },
                        {
                            path: 'simple-line-icons',
                            name: 'Simple Line Icons',
                            component: SimpleLineIcons
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts
                        },
                        {
                            path: 'badges',
                            name: 'Badges',
                            component: Badges
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals
                        }
                    ]
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [{
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                }
            ]
        }
    ]
})