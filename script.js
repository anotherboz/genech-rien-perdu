function getItems(item) {
    return [
        {item:'sac', ou:'un endroit', quand:'20/01/2025', description:'', contact:'harry potter'},
        {item:'sac', ou:'un endroit', quand:'20/01/2025', description:'', contact:'harry potter'},
        {item:'sac', ou:'un endroit', quand:'20/01/2025', description:'', contact:'harry potter'},
        {item:'sac', ou:'un endroit', quand:'20/01/2025', description:'', contact:'harry potter'},
        {item:'vetement', ou:'un endroit', quand:'20/01/2025', description:'', contact:'hermione'},
        {item:'vetement', ou:'un endroit', quand:'20/01/2025', description:'', contact:'hermione'},
        {item:'vetement', ou:'un endroit', quand:'20/01/2025', description:'', contact:'hermione'},
        {item:'vetement', ou:'un endroit', quand:'20/01/2025', description:'', contact:'hermione'},
        {item:'vetement', ou:'un endroit', quand:'20/01/2025', description:'', contact:'hermione'},
        {item:'info', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bill gates'},
        {item:'info', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bill gates'},
        {item:'info', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bill gates'},
        {item:'carte', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bureau'},
        {item:'carte', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bureau'},
        {item:'carte', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bureau'},
        {item:'carte', ou:'un endroit', quand:'20/01/2025', description:'', contact:'bureau'},
        {item:'autre', ou:'dans un rêve', quand:'20/01/2025', description:'virginité', contact:'accueil'},
        {item:'autre', ou:'dans un rêve', quand:'20/01/2025', description:'virginité', contact:'accueil'},
        {item:'autre', ou:'dans un rêve', quand:'20/01/2025', description:'virginité', contact:'accueil'},
    ].filter(i => i.item === item);
}