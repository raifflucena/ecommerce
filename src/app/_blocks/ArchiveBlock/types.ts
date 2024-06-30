import type { Page } from '../../../payload/payload-types'

export type ArchiveBlockPropsBase = Extract<Page['layout'][0], { blockType: 'archive' }>

export interface ArchiveBlockProps extends ArchiveBlockPropsBase {
  sort: string
}
