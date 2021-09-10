import { Button, Dialog } from 'react-vant';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
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
    </div>
  );
}
