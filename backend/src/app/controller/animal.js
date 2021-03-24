import AnimalModel from '../models/animal';

export default class AnimalControl {
  async post(request, response) {
    try {
      const result = await AnimalModel.create(request.body);  
      
      if(!result) return response.status(401).json();
      
      return response.status(201).json(result); 
    
      } catch (error) {
        return response.status(403).json(error);  
      }  
    }
        
    async get(request, response) {
      try {
        const user = await AnimalModel.find();

        if(!user) return response.status(400).json();

        return response.status(200).json(user);
    
      } catch (error) {
        return response.status(404).json(error);
      }
    }
    
  async getId(request, response) {
    try {
      const user = await AnimalModel.findById();

      if(!user) return response.status(404).json({ ERROR: "NOT FOUND" });

      return response.status(200).json(user);
                
    } catch (error) {
      return response.status(404).json(error);       
    }
  }
}