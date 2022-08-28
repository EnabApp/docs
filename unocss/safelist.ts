export const safelist = [
    // Sizes
    ...(() => {
      let sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl']
      return [
        ...sizes.map(size => `min-w-${size}`),
        ...sizes.map(size => `min-h-${size}`),
        ...sizes.map(size => `max-w-${size}`),
        ...sizes.map(size => `max-h-${size}`),
      ]
    })(),
    // Icons
    ...[
      'i-material-symbols-info-outline',
    ],
    
]