# todos

1. Add User authentication
2. Add Albums
3. Save photos to albums
4. generate random photo keys
5. persist redux store


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
