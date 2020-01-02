let RouterConfig = 
    [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              name: 'login',
              path: '/user/login',
              component: './user/login',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/SecurityLayout',
          routes: [
            {
              path: '/',
              component: '../layouts/BasicLayout',
              authority: ['admin', 'user'],
              routes: [
                {
                  path: '/',
                  redirect: '/welcome',
                },
                {
                  path: '/welcome',
                  name: 'welcome',
                  icon: 'smile',
                  component: './Welcome',
                },
                {
                  path: '/admin',
                  name: 'admin',
                  icon: 'crown',
                  component: './Admin',
                  authority: ['admin'],
                },
                {
                  path: '/msb',
                  name: 'msb',
                  icon: 'crown',
                  component: './MsbAdmin/msb',
                  routes:[
                    {
                        path: '/msb/msbchildren',
                        name: 'msbchildren',
                        icon: 'crown',
                        component: './MsbAdmin/msbchildren',
                    }
                  ]
                //   component: './msb'
                // routes:[
                //     {                  
                //         path: '/msb1',
                //         name: 'msb1',
                //         component: 'msb'
                //     }
                // ]
                },
                {
                  component: './404',
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ]
export default RouterConfig