const cloudinaryBaseUrl = 'https://res.cloudinary.com/ditskautr/image/upload'

export const renderCloudinaryImage = (name: string) =>
  `${cloudinaryBaseUrl}/v1643110858/${name}`

export const renderImg = (name: string) => `${cloudinaryBaseUrl}/${name}`
