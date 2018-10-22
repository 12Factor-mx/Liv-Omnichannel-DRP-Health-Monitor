export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        //text: 'NEW'
      }
    },
    {
      name: 'DRP',
      icon: 'icon-fire',
      children: [
        {
          icon: 'icon-basket',
          name: 'e-Commerce',
          url: '/sistemas/eCommerce'
        }
      ]
    }

  ]
}
