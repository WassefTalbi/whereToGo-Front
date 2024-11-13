import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [

        {
            id: 1,
            label: 'UTILISATEUR',
            icon: 'ph-buildings',
            subItems: [
              
            
                {
                    id: 2,
                    label: 'CLIENT',
                    link: '/user/client-list',
                    parentId: 1,
                    
                },
                {
                    id: 3,
                    label: 'OWNER',
                    link: '/user/owner-list',
                    parentId: 1,
                   
                   
                },
            
            ]
        },
        {
            id: 2,
            label: 'RECLAMATION ',
            icon: 'ph-buildings',
            link: '/reclamation/list', 
        },
 
        {
            id: 3,
            label: 'ETABLISSEMENT',
            link: '/real-estate/grid',
            icon: 'ph-buildings',
            
        },
    
  

  
  ]
