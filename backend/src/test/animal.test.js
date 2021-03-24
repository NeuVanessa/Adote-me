import { MongoClient } from 'mongodb';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.DATABASE_TEST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex : true
    })

    db = connection.db(process.env.DATABASE_TEST);
  })

  afterAll(async () => {
    await connection.close();
    await db.close();
  })

  it('should insert a doc into collection', async () => {
    const users = db.collection('/login');

    const mockUser = {  
      title: "",
      description: "",
      category: "",
      cep: 12345-1231230,
      image: Image
    }

    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);
  })

  it('Esse tem que buscar o usuário', async () => {
    const users = db.collection('/login');

    const mockUser = {   
        title: "",
        description: '',
        category: "",
        cep: 12345-1231230,
        image: Image
    }

    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: 'some-user-id' });
    expect(insertedUser).toEqual(mockUser);
  })
})