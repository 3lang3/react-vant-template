import { Link } from 'umi';
import { Flex, Cell } from 'react-vant';

export default function UserPage() {
  return (
    <Flex style={{ padding: '50px 20px' }} direction="column" align="center">
      <h1>User Index</h1>
      <Cell title="Cell" value="some text..." />
      <Link to="/">index pagee</Link>
    </Flex>
  );
}
