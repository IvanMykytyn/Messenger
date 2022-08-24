import jwt_decode from 'jwt-decode'

const handleCallbackResponse = (response) => {
  try {
    const decodedGoogleUser = jwt_decode(response?.credential)
    const { name, email, picture } = decodedGoogleUser

    return { name, email, img: picture }
  } catch (error) {
    return { message: 'Something went wrong. Please try again later.' }
  }
}

export default handleCallbackResponse
