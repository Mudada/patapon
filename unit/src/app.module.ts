import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PataponResolvers } from './app.resolvers'

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql']
            , definitions: {
                path: join(process.cwd(), '/src/app.graphql.ts')
            }
        }),
    ]
    , providers: [PataponResolvers],
})
export class AppModule {}
