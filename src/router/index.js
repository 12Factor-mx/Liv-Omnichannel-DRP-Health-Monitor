import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const ecommerce = () => import('@/views/ATG/ecommerce')

const ECommerceLiverpool = () => import('@/views/ATG/eCommerceLiverpool/ECommerceLiverpool')
  const WebLogicLiverpool = () => import('@/views/ATG/eCommerceLiverpool/WebLogicLiverpool/WebLogicLiverpool')
    const WebLogicServersLiverpool = () => import('@/views/ATG/eCommerceLiverpool/WebLogicLiverpool/WebLogicServersLiverpool/WebLogicServersLiverpool')
  const OriginLiverpool = () => import('@/views/ATG/eCommerceLiverpool/OriginLiverpool/OriginLiverpool')
    //const OriginServersLiverpool = () => import('@/views/ATG/eCommerceLiverpool/OriginLiverpool/OriginServersLiverpool/OriginServersLiverpool')
   const OTDLiverpool = () => import('@/views/ATG/eCommerceLiverpool/OTDLiverpool/OTDLiverpool')

    const EndecaLiverpool = () => import('@/views/ATG/eCommerceLiverpool/EndecaLiverpool/EndecaLiverpool') 
    const EndecaLiverpoolServices = () => import('@/views/ATG/eCommerceLiverpool/EndecaLiverpool/EndecaLiverpoolServices/EndecaLiverpoolServices') 
      const EndecaLiverpoolServicesStatus = () => import('@/views/ATG/eCommerceLiverpool/EndecaLiverpool/EndecaLiverpoolServices/EndecaLiverpoolServicesStatus/EndecaLiverpoolServicesStatus')



const ECommerceMultisitios = () => import('@/views/ATG/eCommerceMultisitios/ECommerceMultisitios')
  const WebLogicMultisitios = () => import('@/views/ATG/eCommerceMultisitios/WebLogicMultisitios/WebLogicMultisitios')
    const WebLogicServersMultisitios = () => import('@/views/ATG/eCommerceMultisitios/WebLogicMultisitios/WebLogicServersMultisitios/WebLogicServersMultisitios')
    const OriginMultisitios = () => import('@/views/ATG/eCommerceMultisitios/OriginMultisitios/OriginMultisitios')
    const EndecaMultisitios = () => import('@/views/ATG/eCommerceMultisitios/EndecaMultisitios/EndecaMultisitios') 
    const EndecaMultisitiosServices = () => import('@/views/ATG/eCommerceMultisitios/EndecaMultisitios/EndecaMultisitiosServices/EndecaMultisitiosServices') 
      const EndecaMultisitiosServicesStatus = () => import('@/views/ATG/eCommerceMultisitios/EndecaMultisitios/EndecaMultisitiosServices/EndecaMultisitiosServicesStatus/EndecaMultisitiosServicesStatus')

const ECommerceMesa = () => import('@/views/ATG/eCommerceMesa/ECommerceMesa')
  const WebLogicMesa = () => import('@/views/ATG/eCommerceMesa/WebLogicMesa/WebLogicMesa')
    const WebLogicServersMesa = () => import('@/views/ATG/eCommerceMesa/WebLogicMesa/WebLogicServersMesa/WebLogicServersMesa')
    const OriginMesa = () => import('@/views/ATG/eCommerceMesa/OriginMesa/OriginMesa')
    const EndecaMesa = () => import('@/views/ATG/eCommerceMesa/EndecaMesa/EndecaMesa') 
    const EndecaMesaServices = () => import('@/views/ATG/eCommerceMesa/EndecaMesa/EndecaMesaServices/EndecaMesaServices') 
      const EndecaMesaServicesStatus = () => import('@/views/ATG/eCommerceMesa/EndecaMesa/EndecaMesaServices/EndecaMesaServicesStatus/EndecaMesaServicesStatus')

const ECommerceSuburbia = () => import('@/views/ATG/eCommerceSuburbia/ECommerceSuburbia')
  const WebLogicSuburbia = () => import('@/views/ATG/eCommerceSuburbia/WebLogicSuburbia/WebLogicSuburbia')
    const WebLogicServersSuburbia = () => import('@/views/ATG/eCommerceSuburbia/WebLogicSuburbia/WebLogicServersSuburbia/WebLogicServersSuburbia')
    const OriginSuburbia = () => import('@/views/ATG/eCommerceSuburbia/OriginSuburbia/OriginSuburbia')
    const EndecaSuburbia = () => import('@/views/ATG/eCommerceSuburbia/EndecaSuburbia/EndecaSuburbia') 
    const EndecaSuburbiaServices = () => import('@/views/ATG/eCommerceSuburbia/EndecaSuburbia/EndecaSuburbiaServices/EndecaSuburbiaServices') 
      const EndecaSuburbiaServicesStatus = () => import('@/views/ATG/eCommerceSuburbia/EndecaSuburbia/EndecaSuburbiaServices/EndecaSuburbiaServicesStatus/EndecaSuburbiaServicesStatus')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Inicio',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }, 
        { path: 'ATG/eCommerce',
          name: 'e-Commerce',
          component: ecommerce
          
        }, 
        {
          path: 'eCommerceLiverpool',
          name: "ECommerce Liverpool",
          component: ECommerceLiverpool
        },
        {
          path: 'WebLogicLiverpool',
          name: "WebLogic Liverpool",
          component: WebLogicLiverpool
        },
        {
          path: 'WebLogicServersLiverpool',
          name: "WebLogic Servers Liverpool",
          component: WebLogicServersLiverpool
        },
        {
          path: 'OriginLiverpool',
          name: "Origenes Liverpool",
          component: OriginLiverpool
        },
        , {
          path: 'OTDLiverpool',
          name: "OTDs Liverpool",
          component: OTDLiverpool
        },
        {
          path: 'EndecaLiverpool',
          name: "Endeca Liverpool",
          component: EndecaLiverpool
        },
        {
          path: 'EndecaLiverpoolServices-*',
          name: "Endeca Liverpool Services",
          component: EndecaLiverpoolServices
        },
        {
          path: 'EndecaLiverpoolServicesStatus-*',
          name: "Endeca Liverpool Services Status",
          component: EndecaLiverpoolServicesStatus
        },
        {
          path: 'eCommerceMultisitios',
          name: "ECommerce Multisitios",
          component: ECommerceMultisitios
        },
        {
          path: 'WebLogicMultisitios',
          name: "WebLogic Multisitios",
          component: WebLogicMultisitios
        },
        {
          path: 'WebLogicServersMultisitios',
          name: "WebLogic Servers Multisitios",
          component: WebLogicServersMultisitios
        },
        {
          path: 'OriginMultisitios',
          name: "Origenes Multisitios",
          component: OriginMultisitios
        },
        {
          path: 'EndecaMultisitios',
          name: "Endeca Multisitios",
          component: EndecaMultisitios
        },
        {
          path: 'EndecaMultisitiosServices-*',
          name: "Endeca Multisitios Services",
          component: EndecaMultisitiosServices
        },
        {
          path: 'EndecaMultisitiosServicesStatus-*',
          name: "Endeca Multisitios Services Status",
          component: EndecaMultisitiosServicesStatus
        },
         {
          path: 'eCommerceMesa',
          name: "ECommerce Mesa",
          component: ECommerceMesa
        },
        {
          path: 'WebLogicMesa',
          name: "WebLogic Mesa",
          component: WebLogicMesa
        },
        {
          path: 'WebLogicServersMesa',
          name: "WebLogic Servers Mesa",
          component: WebLogicServersMesa
        },
        {
          path: 'OriginMesa',
          name: "Origenes Mesa",
          component: OriginMesa
        },
        {
          path: 'EndecaMesa',
          name: "Endeca Mesa",
          component: EndecaMesa
        },
        {
          path: 'EndecaMesaServices-*',
          name: "Endeca Mesa Services",
          component: EndecaMesaServices
        },
        {
          path: 'EndecaMesaServicesStatus-*',
          name: "Endeca Mesa Services Status",
          component: EndecaMesaServicesStatus
        },
        {
          path: 'eCommerceSuburbia',
          name: "ECommerce Suburbia",
          component: ECommerceSuburbia
        },
        {
          path: 'WebLogicSuburbia',
          name: "WebLogic Suburbia",
          component: WebLogicSuburbia
        },
        {
          path: 'WebLogicServersSuburbia',
          name: "WebLogic Servers Suburbia",
          component: WebLogicServersSuburbia
        },
        {
          path: 'OriginSuburbia',
          name: "Origenes Suburbia",
          component: OriginSuburbia
        },
        {
          path: 'EndecaSuburbia',
          name: "Endeca Suburbia",
          component: EndecaSuburbia
        },
        {
          path: 'EndecaSuburbiaServices-*',
          name: "Endeca Suburbia Services",
          component: EndecaSuburbiaServices
        },
        {
          path: 'EndecaSuburbiaServicesStatus-*',
          name: "Endeca Suburbia Services Status",
          component: EndecaSuburbiaServicesStatus
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
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
            render (c) { return c('router-view') }
          },
          children: [
            {
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
            render (c) { return c('router-view') }
          },
          children: [
            {
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
            render (c) { return c('router-view') }
          },
          children: [
            {
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
        render (c) { return c('router-view') }
      },
      children: [
        {
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
