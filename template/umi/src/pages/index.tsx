import { Link } from 'umi';
import { checkResponse } from '@/utils';
import { Search, Button, Dialog, Flex } from 'react-vant';

export default function IndexPage() {
  return (
    <Flex style={{ padding: '50px 20px' }} direction="column" align="center">
      <h1>Page Index</h1>
      <Button
        round
        type="primary"
        onClick={() =>
          Dialog.alert({
            title: '提示',
            message: `参照 Vant 打造的 React 框架移动端组件库。`,
          })
        }
      >
        欢迎使用React Vant
      </Button>
      <Button
        round
        block
        style={{ marginTop: 20 }}
        type="warning"
        onClick={() => checkResponse({ type: 1, message: '测试notify' })}
      >
        测试notify
      </Button>

      <Search
        style={{ width: '100%' }}
        label="搜索"
        placeholder="请输入搜索关键词"
        onChange={(val) => {
          console.log('onChange----', val);
        }}
        onSearch={(val) => {
          console.log('onSearch', val);
        }}
      />
      <Link to="/user">user page</Link>
    </Flex>
  );
}
