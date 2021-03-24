import UserModel from '../models/user';

export default class userControl {
  async post(request, response) {
    try {
      const result = await UserModel.create(request.body);
      const { password, ...user } = result.toObject();
      const responseUser = user;
      
      if(!result) return response.status(401).json();

      return response.status(200).json({ result, responseUser }); 
    
    } catch (error) {
      return response.status(403).json(error);  
      }  
    }
        
    async get(request, response) {
      try {
        const user = await UserModel.find();
        return response.status(200).json(user);
    
      } catch (error) {
        return response.status(404).json(error);
      }
    }
    
    async getId(request, response) {
      try {
        const user = await UserModel.findById();
        return response.status(200).json(user);
                
      } catch (error) {
        return response.status(404).json(error);       
      }
    }
}