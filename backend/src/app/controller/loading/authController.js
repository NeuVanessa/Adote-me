import { generateToken } from '../services/auth';

export default class authController {
  async get(request, response) {
    try {
      const auth = await request.body;
      return response.status(200).json(auth);
            
      } catch (error) {
        return response.status(404).json(error);
      }
    } 

  async post(request, response) {
    const { username, password } = request.body;

    if (!username && !password) {
      return response.status(400).send({ ERROR: 'Invalid user or password' });
    }

    const payload = {
      username,
      password
    }
        
    const token = generateToken(payload);

      return response.send({ token });
    }

  async getProtected(protectRoute, request, response) {
    try {
      const auth = await request.decoded;
      return response.status(200).json(auth);

    } catch (error) {
      return response.status(404).json(error);   
    }
  }
}