import { extendTheme } from "@chakra-ui/react"

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  }
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}
const theme = extendTheme({ config })

export default theme