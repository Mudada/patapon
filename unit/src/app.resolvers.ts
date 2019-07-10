import { Resolver, Query, Args } from '@nestjs/graphql'
import { Patapon } from './app.graphql'

@Resolver('Patapon')
export class PataponResolvers {


    @Query('patapon')
    async getPatapon(@Args('id')id: number):Promise<Patapon> {
        return await {id, job:"yaripon"}
    }

    @Query('patapons')
    async getPatapons():Promise<Patapon[]> {
        return await [{id:0, job:"yaripon"}]
    }
}
