import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))


const routes = {
    menu : [
      { exact: true,  name: '메인 페이지',    component: Home,          path: '/'},
    ]
}

export default routes
