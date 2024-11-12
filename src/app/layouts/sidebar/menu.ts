import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [

  {
    id: 1,
    label: 'MENUITEMS.APPS.LIST.REALESTATE',
    icon: 'ph-buildings',
    subItems: [
        {
            id: 2,
            label: 'MENUITEMS.APPS.LIST.LISTINGGRID',
            link: '/real-estate/grid',
            parentId: 1
        },
    
        {
            id: 3,
            label: 'Client',
            parentId: 1,
            isCollapsed: true,
            subItems: [
                {
                    id: 4,
                    label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                    link: '/user/client-list',
                    parentId: 3
                },
            
            ]
        },
        {
            id: 5,
            label: 'Restaurant',
            parentId: 1,
            isCollapsed: true,
            subItems: [
                {
                    id: 6,
                    label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                    link: '/user/owner-list',
                    parentId: 5
                },
               
            ]
        },
     
    ]
},
 
  
  ]
