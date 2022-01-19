import axios from 'axios';

export const sendFormData = async inputValue => {
  try {
    const serverResponse = await axios.post('http://localhost:3001/user',inputValue);
    return serverResponse;
  } catch (error) {
    console.error('Something went wrong here', error)
  }
}

// export const validateInput = async () => {
//   try {
//     const serverResponse = await axios.get('http://localhost:3001/user');
//     console.log(serverResponse.data)
//   } catch (error) {
//     console.error('Please checks all inputs', error);
//   }
// }