"use client"

import React from 'react'
import Link from 'next/link'
import classes from './index.module.scss'
import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type Media = {
  id: string
  alt: string
  caption?: any
  updatedAt?: string
  createdAt?: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}

type CategoryCardProps = {
    category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const media = category.media as Media
    const { setCategoryFilters } = useFilter()

    return (
        <Link
            href="/products"
            className={classes.card}
            style={{ backgroundImage: `url(${media.url})` }}
            onClick={() => setCategoryFilters([category.id])}
        >
            <p className={classes.title}>{category.title}</p>
        </Link>
    )
}

export default CategoryCard
