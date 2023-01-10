module.exports = {
    // Força barra no final dos diretórios (utl)
    trailingSlash: true,
    // Redirecionamentos alternativos
    async redirects() {
        return [
          {
            source: '/perguntas',
            destination: '/faq/',
            permanent: true,
          },
        ]
      },
  }