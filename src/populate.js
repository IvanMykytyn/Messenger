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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
  { id: uuidv4(), name: 'paul', img: paul, messages: [] },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
    name: 'Josefina',
    img: josefina,
    messages: [
      {
        id: uuidv4(),
        message: 'We are losing money! Quick!',
        date: '2022-02-18T02:10:17Z',
      },
      {
        id: uuidv4(),
        message:
          "I'm having breakfast right now, can't you wait for 10 minutes?",
        date: '2022-02-18T02:05:38Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'Quickly come to the meeting room 1B, we have a big server issue',
        date: '2022-02-18T02:00:58Z',
      },
    ],
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
  {
    id: uuidv4(),
    name: 'Petronilla',
    img: 'https://robohash.org/atquesunteligendi.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio',
        date: '2018-07-08T07:42:43Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam',
        date: '2021-03-12T08:53:08Z',
      },
      {
        id: uuidv4(),
        message: 'hendrerit at vulputate vitae nisl aenean',
        date: '2021-03-29T22:19:44Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a',
        date: '2020-01-29T06:05:54Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'sed accumsan felis ut at dolor quis',
        date: '2020-12-30T11:12:39Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Megan',
    img: 'https://robohash.org/aliquamomnisdolores.jpg?size=50x50&set=set1',
    messages: [],
  },
  {
    id: uuidv4(),
    name: 'Marice',
    img: 'https://robohash.org/dolorumdoloresquo.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message: 'odio in hac',
        date: '2019-07-14T00:25:50Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'non quam nec dui luctus',
        date: '2019-04-19T21:03:20Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'consequat dui nec nisi',
        date: '2022-04-11T22:30:19Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Inessa',
    img: 'https://robohash.org/quammagnicorrupti.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
        date: '2019-03-27T11:35:10Z',
      },
      {
        id: uuidv4(),
        message: 'orci mauris lacinia sapien quis libero nullam sit',
        date: '2018-01-03T08:21:07Z',
        isYour: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Danika',
    img: 'https://robohash.org/eaetdicta.jpg?size=50x50&set=set1',
    messages: [],
  },
  {
    id: uuidv4(),
    name: 'Lanny',
    img: 'https://robohash.org/magnibeataenulla.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a',
        date: '2020-03-06T23:35:18Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa',
        date: '2018-11-04T16:43:22Z',
      },
      {
        id: uuidv4(),
        message:
          'at nulla suspendisse potenti cras in purus eu magna vulputate',
        date: '2022-06-21T19:04:37Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna',
        date: '2019-04-25T04:21:00Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Tades',
    img: 'https://robohash.org/errorquiasint.jpg?size=50x50&set=set1',
    messages: [],
  },
  {
    id: uuidv4(),
    name: 'Brena',
    img: 'https://robohash.org/adipiscinatusdebitis.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message: 'blandit non interdum in ante vestibulum ante',
        date: '2019-05-24T18:49:48Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'suscipit nulla elit ac nulla sed vel enim sit',
        date: '2022-07-16T20:51:05Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend',
        date: '2022-08-11T04:36:18Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Yovonnda',
    img: 'https://robohash.org/atqueoditadipisci.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'turpis elementum ligula vehicula consequat morbi a ipsum integer a',
        date: '2017-07-13T09:07:36Z',
      },
      {
        id: uuidv4(),
        message: 'lorem id ligula suspendisse ornare consequat lectus in est',
        date: '2020-06-11T07:35:16Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        date: '2019-04-14T19:45:04Z',
      },
      {
        id: uuidv4(),
        message:
          'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum',
        date: '2017-07-06T18:35:01Z',
        isYour: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Bard',
    img: 'https://robohash.org/autemvoluptatesconsequuntur.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
        date: '2017-10-29T09:08:25Z',
      },
      {
        id: uuidv4(),
        message:
          'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis',
        date: '2022-05-01T04:11:02Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat',
        date: '2021-07-27T08:48:28Z',
      },
      {
        id: uuidv4(),
        message:
          'augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec',
        date: '2020-10-06T14:48:20Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
        date: '2021-08-06T20:32:15Z',
      },
      {
        id: uuidv4(),
        message:
          'orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla',
        date: '2018-02-16T14:26:01Z',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Faustina',
    img: 'https://robohash.org/consequaturprovidentasperiores.jpg?size=50x50&set=set1',
    messages: [],
  },
  {
    id: uuidv4(),
    name: 'Elnora',
    img: 'https://robohash.org/beataeitaqueaccusantium.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message: 'nulla neque libero convallis',
        date: '2020-08-18T18:45:10Z',
        isYour: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Romeo',
    img: 'https://robohash.org/quoatex.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message: 'morbi non quam nec dui luctus rutrum nulla tellus',
        date: '2017-05-26T07:44:40Z',
      },
      {
        id: uuidv4(),
        message:
          'in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis',
        date: '2017-11-18T22:23:50Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'mattis odio donec vitae nisi nam ultrices',
        date: '2017-11-15T09:28:04Z',
      },
      {
        id: uuidv4(),
        message: 'in faucibus orci luctus et',
        date: '2021-11-16T21:20:05Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message: 'mauris viverra diam vitae quam suspendisse',
        date: '2019-02-07T01:02:39Z',
      },
      {
        id: uuidv4(),
        message:
          'adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate',
        date: '2018-05-09T14:59:46Z',
        isYour: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Edy',
    img: 'https://robohash.org/harumdictaillo.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message: 'at turpis',
        date: '2020-08-19T01:38:50Z',
        isYour: true,
      },
      {
        id: uuidv4(),
        message:
          'sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor',
        date: '2020-10-27T07:02:24Z',
      },
      {
        id: uuidv4(),
        message:
          'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget',
        date: '2021-11-01T18:22:27Z',
      },
      {
        id: uuidv4(),
        message:
          'justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
        date: '2017-08-20T02:08:50Z',
      },
      {
        id: uuidv4(),
        message:
          'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper',
        date: '2022-06-17T05:01:32Z',
      },
      {
        id: uuidv4(),
        message: 'mi in porttitor pede justo',
        date: '2022-06-22T03:51:21Z',
        isYour: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Kennith',
    img: 'https://robohash.org/evenietlaborumaut.jpg?size=50x50&set=set1',
    messages: [
      {
        id: uuidv4(),
        message:
          'ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum',
        date: '2020-04-03T23:42:13Z',
        isYour: true,
      },
    ],
  },
]

export default contacts
