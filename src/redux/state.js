const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
  _state: {
    profilePage: {
      newPostText: 'Hey!',

      posts: [
        { id: 1, message: 'Hi!', likeCount: '2' },
        { id: 2, message: 'hallo!!', likeCount: '20' },
        { id: 3, message: 'Hi hi!', likeCount: '15' }
      ]
    },

    dialogsPage: {
      dialogs: [
        { name: 'Max', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtZoci8Qvin0ijTr1rPaawcBk--nUMpV0mI8KDSYkblQ6tfZrCQ&s', id: 1 },
        { name: 'Misha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE6w5Lr025Ur9UFHZlN3LXH-2UzuGgRXR1tzX9yQTOnfGoJtl&s', id: 2 },
        { name: 'Lena', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtZoci8Qvin0ijTr1rPaawcBk--nUMpV0mI8KDSYkblQ6tfZrCQ&s', id: 3 },
        { name: 'Dana', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauF_FCWfrCJfSqaApuf-qLkL0NL1A2LM5cX-UloTsZ7344ePy&s', id: 4 }
      ],

      messages: [
        { id: 1, message: 'hi!' },
        { id: 2, message: 'Privet!' },
        { id: 3, message: 'gutten tag!!' }
      ],

      newMessageBody: ''
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('dsdsd');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }

    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    else if (action.type == UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }

    else if (action.type == SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody =  '';
      this._state.dialogsPage.messages.push({id: 4, message: body});
      this._callSubscriber(this._state);
    }
  }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT, newText: text
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
  };



export default store;
window.store = store;