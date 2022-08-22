// {
//     id:
//     name:
//     img:
//     messages: [{
//         id: uuidv4(),
//         date:
//     }]
// }

import {
  anna,
  emma,
  john,
  liam,
  paul,
  olivia,
  william,
  sophia,
  alice,
  josefina,
  velazquez,
} from './assets/contacts/index.js'

import { v4 as uuidv4 } from 'uuid'

const contacts = [
  {
    id: 1,
    name: 'anna',
    img: anna,
    messages: [
      {
        id: uuidv4(),
        message:
          'eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
        date: '2021-02-14T12:42:09Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'est lacinia nisi venenatis tristique fusce',
        date: '2021-01-01T20:54:39Z',
      },
      {
        id: uuidv4(),
        message:
          'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi',
        date: '2021-03-27T11:57:14Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'ultrices vel augue',
        date: '2021-03-01T07:33:16Z',
      },
      {
        id: uuidv4(),
        message:
          'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit',
        date: '2022-07-15T04:17:13Z',
        isYour: true,
      },
    ],
  },
  {
    id: 2,
    name: 'emma',
    img: emma,
    messages: [
      {
        id: uuidv4(),
        message:
          'mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
        date: '2020-09-01T12:47:13Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla',
        date: '2022-06-01T01:13:04Z',
      },
    ],
  },
  {
    id: 3,
    name: 'john',
    img: john,
    messages: [
      {
        id: uuidv4(),
        message: 'turpis adipiscing',
        date: '2020-12-27T16:37:51Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'augue quam sollicitudin',
        date: '2020-10-31T06:40:46Z',
      },
    ],
  },
  {
    id: 4,
    name: 'liam',
    img: liam,
    messages: [
      {
        id: uuidv4(),
        message:
          'pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim',
        date: '2020-01-15T16:03:13Z',
      },
      {
        id: uuidv4(),
        message: 'est quam pharetra',
        date: '2021-10-08T11:25:41Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'augue quam sollicitudin vitae consectetuer',
        date: '2022-03-17T20:40:23Z',
      },
      {
        id: uuidv4(),
        message:
          'eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque',
        date: '2021-08-26T19:32:07Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus',
        date: '2022-03-29T17:35:35Z',
      },
      {
        id: uuidv4(),
        message:
          'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit',
        date: '2022-03-09T00:11:17Z',
        isYour: true,
      },
    ],
  },
  { id: 5, name: 'paul', img: paul, messages: [] },
  {
    id: 6,
    name: 'olivia',
    img: olivia,
    messages: [
      {
        id: uuidv4(),
        message: 'at feugiat non pretium quis lectus suspendisse potenti',
        date: '2020-09-03T06:57:34Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere',
        date: '2022-07-06T23:01:26Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'massa donec dapibus duis',
        date: '2022-08-19T16:25:02Z',
      },
      {
        id: uuidv4(),
        message:
          'auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed',
        date: '2022-01-11T19:58:37Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'vel lectus in quam fringilla rhoncus mauris enim leo rhoncus',
        date: '2021-09-23T05:56:57Z',
      },
      {
        id: uuidv4(),
        message: 'vel nisl duis ac',
        date: '2022-05-05T20:36:52Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
        date: '2021-12-01T13:07:32Z',
      },
    ],
  },
  {
    id: 7,
    name: 'william',
    img: william,
    messages: [
      {
        id: uuidv4(),
        message:
          'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan',
        date: '2020-09-21T09:50:34Z',
        isYour: true,
      },
    ],
  },
  {
    id: 8,
    name: 'sophia',
    img: sophia,
    messages: [
      {
        id: uuidv4(),
        message:
          'faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius',
        date: '2021-01-09T08:31:58Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'donec semper sapien a',
        date: '2022-04-29T23:18:38Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'venenatis non sodales sed tincidunt eu felis',
        date: '2022-05-25T23:47:17Z',
      },
      {
        id: uuidv4(),
        message: 'dictumst etiam faucibus cursus urna',
        date: '2022-03-10T18:01:54Z',
        isYour: true,
      },
    ],
  },
  {
    id: 9,
    name: 'Josefina',
    img: josefina,
    messages: [
      {
        id: uuidv4(),
        message: 'We are losing money! Quick!',
        date: '2022-02-18T04:10:17Z',
      },
      {
        id: uuidv4(),
        message:
          "I'm having breakfast right now, can't you wait for 10 minutes?",
        date: '2022-02-18T04:05:38Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'Quickly come to the meeting room 1B, we have a big server issue',
        date: '2022-02-18T04:00:58Z',
      },
    ],
  },
  {
    id: 11,
    name: 'Velazquez',
    img: velazquez,
    messages: [
      {
        id: uuidv4(),
        message:
          'Quickly come to the meeting room 1B, we have a big server issue',
        date: '2021-03-18T12:04:51Z',
      },
    ],
  },
  {
    id: 12,
    name: 'Alice Freeman',
    img: alice,
    messages: [
      {
        id: uuidv4(),
        message: 'You are the worst!',
        date: '2022-06-12T11:11:53Z',
      },
      {
        id: uuidv4(),
        message: 'No!',
        date: '2022-04-22T04:05:38Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'Are you going...?',
        date: '2022-04-22T04:00:58Z',
      },
    ],
  },
]

export default contacts
