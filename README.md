# todos

1. Add User authentication
5. persist redux store
6: fix scrollview for albums
7: send emails with order information
8: order forms (address ect.)

# schema
  {
    ablums: [
      {
        photos: [
          {
            uri: string,
            width: int,
            height: int,
            orientation: 'string'
          }
        ],
        length: int
        completion: int
      }
    ]
  }
