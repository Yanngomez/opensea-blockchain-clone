import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'k49zkjx9',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skWcdS1AK7nf1k98N7gZT0ED7B5OvH7g271OEvkAVGOxiSmnG4njMlo7H71xBJUo2YO6yRR8heJhSnpNNlH90cmZpZoGa3dWkklf9twM7AJM0cdVQmpXAQIBkZ2HO6bzkDor2Xb78TUGzF3PfakGCfsTklfNnyO0Iq8tl6aNWbCSycfGjAoU',
  useCdn: false,
})