import { RequestTemplate } from '../global'
import { NotionRequest, NotionResponse } from '../..'
import { Emoji } from '../../request/global'

export interface Request extends RequestTemplate {
    endpoint: `pages`
    method: 'POST'
    params?: {
        parent: NotionRequest.Parent
        properties: NotionRequest.PageProperty
        children?: NotionRequest.Block[]
        icon?: Emoji | NotionRequest.Files.External
        cover?: NotionRequest.Files.External
    }
}

export type Response = NotionResponse.Page
