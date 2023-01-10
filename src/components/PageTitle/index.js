import Head from 'next/head'
import React from 'react'

export default function index ({ children }) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}
