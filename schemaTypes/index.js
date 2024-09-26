import { defineConfig } from 'sanity'
import page from './page'
import gallery from './gallery'
import project from './project'
import cmsPage from './cmsPage'
import videoEmbed from './videoEmbed'

export const schemaTypes = [page, gallery, project, cmsPage, videoEmbed]
