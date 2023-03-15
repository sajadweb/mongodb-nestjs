import { MongooseModule } from '@nestjs/mongoose';

export const MongoConfigAsync = MongooseModule.forRootAsync({
  useFactory: async () => ({
    uri: 'mongodb://127.0.0.1:27017/restapi',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
});
