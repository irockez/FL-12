const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];


const rootNode = document.getElementById('root');

function buildTree(structure, parentNode) {
    structure.forEach((obj) => {
      console.log(obj.folder);
      console.log(obj.title);
      let node = document.createElement('li');
      node.innerText = obj.title;
      parentNode.appendChild(node);

      if (obj.hasOwnProperty('children') && Array.isArray(obj.children)) {
        let node = document.createElement('ul');
        buildTree(obj.children, node);
        parentNode.appendChild(node);        
      }      
    });
}

buildTree(structure, rootNode);