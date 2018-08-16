# Lost Fam App
By Sam Wood and Chadwick Platt-Kuhn


Original idea proposed by Kent Johns and Michael Graeff

This is an attempt to recreate the expirience that comes with shooting film. The user creates rolls with a fixed length. The photos you take under that roll cannot be reproduced/viewed until the whole roll is finished. All the photos in said album are "developed" and viewed all at once.

## CURRENT TO DO LIST


1: add photo filter options. https://github.com/gre/gl-react/blob/master/README.md

2: add stripe https://medium.com/code-well-live-forever/credit-cards-with-stripe-and-react-native-1bfe9afcbb42

4: figure out height/width of pics for dwnld.

6: Save the roll locally to a new album https://www.npmjs.com/package/react-native-photos-framework

7: Cache login information

8: Bundle App

9: SET up fire base

10: orient photos correctly

11: disable landscape mode


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
