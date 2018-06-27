# Lost Fam map


## Original idea proposed by Kent Johns and Micahel Graeff



# URL:
exp://j2-w8v.samuelote.lostfam.exp.direct:80

# todos

1. Add User authentication
5. persist redux store
6: fix scrollview for albums
7: send emails with order information
8: order forms (address ect.)
9: figure out height/width of pics for dwnld.
10: integrate navigation headers instead of custom headers https://reactnavigation.org/docs/headers.html


# schema
  {
    ablums: [
      {
        photos: [
          {
            uri: string,
            width: int,
            height: int,
            exif: object,
            orientation: 'string'
          }
        ],
        length: int
        completion: int
      }
    ]
  }
