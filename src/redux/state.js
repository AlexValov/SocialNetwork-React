let state = {
  profilePage: {
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
      { message: 'hi!' },
      { message: 'Privet!' },
      { message: 'gutten tag!!' }
    ]
  }
};

export let addPost = (addMessage) => {
  debugger;
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
};


export default state;