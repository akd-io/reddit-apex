import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'

const LandingPageTemplate = () => {
  const posts = []

  for (let i = 0; i < 5; i++) {
    posts.push({
      score: 150 - 7 * i,
      title: `This is the title of post ${i}.`,
      link: `#`,
      author: {
        username: `author ${i}`,
        link: '#',
      },
    })
  }

  return (
    <Flex margin={['20px', '40px']} flexDirection="column">
      <Flex as="main" flexDirection="column">
        <Flex as="section" flexDirection="column">
          <Heading>The Apex of Reddit</Heading>
          <Flex marginTop="20px">
            <List spacing="20px">
              {posts.map((post) => (
                <ListItem key={post.title}>
                  <Flex flexDirection="column">
                    <Link href={post.link}>
                      <Text>
                        {post.score} | {post.title}
                      </Text>
                    </Link>
                    <Box>
                      <Link href={post.author.link}>
                        <Text as="span">by {post.author.username}</Text>
                      </Link>{' '}
                      | <Link href={post.link}>comments</Link>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex as="footer" marginTop="40px">
        <Text>
          Generated by{' '}
          <Link href="https://github.com/akd-io/create-next-stack">
            Create Next Stack
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default LandingPageTemplate
