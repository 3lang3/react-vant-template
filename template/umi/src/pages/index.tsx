import { Link } from 'umi';
import { Flex, Button } from 'react-vant';

export default function IndexPage() {
  return (
    <Flex style={{ padding: '50px 20px' }} direction="column" align="center">
      <h1>Page Index</h1>
      <Button
        round
        type="primary"
      >
        欢迎使用React Vant
      </Button>

      <Link to="/user">user page</Link>
    </Flex>
  );
}
