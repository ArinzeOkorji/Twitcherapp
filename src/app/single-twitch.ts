import * as moment from 'moment';


export class SingleTwitch {
  message: any;
  messageTime: any;
  /*author: any;
  messageLikes: number;
  messageRT: number;
  messageComments: [];*/
  id: number;
  twitchIsLiked = false;
  twitchIsNotLiked = true;
  listOfTwitchLikers: Array<object> = [];
  listOfTwitchCommenters: Array<object> = [];
  listOfTwitchComments: Array<object> = [];
  numberOfLikes = 0;
  numberOfComments = 0;
  showAmountOfLikes = false;
  showAmountOfComments = false;
  singleTwitchComment;
  author;

  twitchService;

  constructor(
    message: any,
    id: number,
    messageTime: any,
    author: any/*, messageLike: number, messageRT: number, mesageComments: [] */
  ) {
    this.message = message;
    this.id = id;
    this.messageTime = messageTime;
    this.author = author;
  }

  like(messageId: number, particularUser: {}) {
    if (
      this.id === messageId &&
      !this.listOfTwitchLikers.includes(particularUser)
    ) {
      this.listOfTwitchLikers.push(particularUser);

      this.twitchIsLiked = true;
      this.twitchIsNotLiked = false;
    } else {
      this.listOfTwitchLikers = this.listOfTwitchLikers.filter(m => {
        return m !== particularUser;
      });
      this.twitchIsLiked = false;
      this.twitchIsNotLiked = true;
    }

    this.numberOfLikes = this.listOfTwitchLikers.length;

    if (this.listOfTwitchLikers.length > 0) {
      this.showAmountOfLikes = true;
      console.log(this.listOfTwitchLikers.length);
    } else {
      this.showAmountOfLikes = false;
    }
  }

  comment(comment, particularUser) {
    let date = new Date();

    let twitchId = Math.random() * 2;
    let twitchDate = moment(date).fromNow(true);

    this.singleTwitchComment = new SingleTwitch(comment.value, twitchId, twitchDate, particularUser);
    this.listOfTwitchComments.unshift(this.singleTwitchComment);
    this.numberOfComments = this.listOfTwitchComments.length;

    console.log('Hola Amigo')
    console.log(comment)

    if (this.listOfTwitchComments.length > 0) {
      this.showAmountOfComments = true;
      console.log(this.listOfTwitchComments.length);
    } else {
      this.showAmountOfComments = false;
    }
  }


}
