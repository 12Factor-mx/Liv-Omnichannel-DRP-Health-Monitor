export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'danger',
        //text: 'NEW'
      }
    },
    {
      name: 'DRP',
      badge: {
        variant: 'danger',
        color: 'red'
      },
      icon: 'icon-fire',
      children: [
        {
          badge: {
            variant: 'warning'
          },
          icon: 'icon-basket',
          name: 'e-Commerce',
          url: '/sistemas/eCommerce'
        }
      ]
    }

  ]
}
