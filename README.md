# Lost Fam App
By Sam Wood and Chadwick Platt-Kuhn


### Original idea proposed by Kent Johns and Michael Graeff
This is an attempt to recreate the expirience that comes with shooting film. The user creates albums with a fixed length. The photos you take under that album cannot be reproduced until the whole album is finished. All the photos in said album are "developed" and viewed all at once.

## todos

1: add photo filter options
2: send emails with order information
3: order forms (address ect.)
4: figure out height/width of pics for dwnld.
5: stylize library view with sorted albums.
6: Save the roll locally to a new album  
7: Cache login information


## ALBUM schema
  {
    ablums: [
      {
        pics: [
          {
            uri: string,
            exif: object,
            orientation: 'string'
          }
        ],
        name: str,
        capacity: int,
        user: str,
        date_created: DATE
      }
    ]
  }
