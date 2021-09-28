import { checkResponse } from '@/utils';
import { Button, Dialog, Flex } from 'react-vant';
import styles from './index.less';

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
        onClick={() =>
          checkResponse({ type: 1, message: '测试notify' })
        }
      >
        测试notify
      </Button>
    </Flex>
  );
}
